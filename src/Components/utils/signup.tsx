/* eslint-disable max-len */
import React from 'react';

function displayErrorEmail() {
  const emailInp = document.getElementById('email') as HTMLInputElement;
  let message: string;
    emailInp.value ? (message = 'Email does not respect format') : (message = 'Please complete this field');
    emailInp.setCustomValidity(message);
}

export function nextCliqued(
    e: React.FormEvent<HTMLElement>,
    inc: number,
    add: React.Dispatch<React.SetStateAction<number>>,
) {
  if (inc === 1) {
    verifyPartie1Form(e, inc, add);
  } else if (inc === 2) {
    verifyPartie2Form(e, inc, add);
  }
}

function verifyPartie2Form(
    e: React.FormEvent<HTMLElement>,
    inc: number,
    add: React.Dispatch<React.SetStateAction<number>>,
) {
  const pass1 = document.getElementById('pass1') as HTMLInputElement;
  const passwordConfirm = document.getElementById('pass2') as HTMLInputElement;
  const errorContent = document.getElementById('error-content') as HTMLElement;
  const regex = new RegExp(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/);
  console.log(regex.test(pass1.value));
  if (!regex.test(pass1.value)) {
    errorContent.className = 'error-content-true';
    e.preventDefault();
    return;
  }
  errorContent.style.display = 'none';
  if (passwordConfirm.value !== pass1.value) {
    displayErrorPassword(passwordConfirm);
  } else {
    const btn = document.getElementById('submit') as HTMLButtonElement;
    btn.innerText = 'submit';
    displayNextdiv(e, inc, add);
  }
}

function displayErrorPassword(passwordInp: HTMLInputElement) {
  passwordInp.setCustomValidity('the two fields passwords are different');
}

function verifyPartie1Form(
    e: React.FormEvent<HTMLElement>,
    inc: number,
    add: React.Dispatch<React.SetStateAction<number>>,
) {
  const emailInp = document.getElementById('email') as HTMLInputElement;
  const firstName = document.getElementById('firstName') as HTMLInputElement;
  const lastName = document.getElementById('lastName') as HTMLInputElement;
  if (!firstName.value || !lastName.value) {
    return;
  }
  const regex = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
  return !regex.test(emailInp.value) || !emailInp.value ? displayErrorEmail() : displayNextdiv(e, inc, add);
}

function displayNextdiv(
    e: React.FormEvent<HTMLElement>,
    inc: number,
    add: React.Dispatch<React.SetStateAction<number>>,
) {
  const inactiveDiv = document.getElementById('partie-' + inc) as HTMLElement;
  inactiveDiv.className = 'inactive';
  const j: number = inc + 1;
  const activeDiv = document.getElementById('partie-' + j);
  if (activeDiv != null) {
    activeDiv.className = 'active';
  }
  add(inc + 1);
  e.preventDefault();
}

export function onChecked() {
  const checkInp = document.getElementById('check-inp') as HTMLInputElement;
  const passwordInp = document.getElementById('pass1') as HTMLInputElement;
  const passwordConfirm = document.getElementById('pass2') as HTMLInputElement;
  if (checkInp.checked) {
    passwordInp.type = 'text';
    passwordConfirm.type = 'text';
  } else {
    passwordInp.type = 'password';
    passwordConfirm.type = 'password';
  }
}
