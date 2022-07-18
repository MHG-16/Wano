/* eslint-disable max-len */
import React from 'react';

export function displayErrorEmail() {
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
  const emailInp = document.getElementById('email') as HTMLInputElement;
  const firstName = document.getElementById('firstName') as HTMLInputElement;
  const lastName = document.getElementById('lastName') as HTMLInputElement;
  if (!firstName.value || !lastName.value) {
    return;
  }
  const regex = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
  return !regex.test(emailInp.value) || !emailInp.value ? displayErrorEmail() : displayNextdiv(e, inc, add);
}

export function displayNextdiv(
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
