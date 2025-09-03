import { expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Signup from '../app/(auth)/signup/page'


test('sign up form test', () => {
    render(<Signup />);
    const emailInput=screen.getByLabelText('ایمیل');
    const nameInput=screen.getByLabelText('نام کاربری');
    const passwordInput=screen.getByLabelText('رمز عبور');
    const btnSubmit=screen.getByRole('button');

    fireEvent.change(emailInput,{target:{value:'hanafaizi83@gmail.com'}});
    fireEvent.change(nameInput,{target:{value:'هانا فیضی'}});
    fireEvent.change(passwordInput,{target:{value:'Hana1234*'}});
    fireEvent.click(btnSubmit);
})