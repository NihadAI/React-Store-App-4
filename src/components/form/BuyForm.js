import React from 'react';
import './buyForm.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import Button from '../UI/button/Button';
import { PatternFormat } from 'react-number-format';

const initialValues = {
    name: '',
    surname: '',
    age: '',
    address: '',
    phoneNumber: '',
};

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    surname: Yup.string().required('Required!').min(2, 'Too short!'),
    age: Yup.number().required('Required').min(14, 'You must be at least 14 years').max(60, 'You must be at most 60 years'),
    address: Yup.string().required('Required!').min(2, 'Too short!'),
    phoneNumber: Yup.string().required('Required!'),
});

const BuyForm = ({ card, onBuyConfirm }) => {
    const onSubmit = values => {
        console.log('Game to buy:', card);
        console.log('Form values:', values);
        onBuyConfirm(card);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" placeholder="Please Enter your name" />
                    <ErrorMessage name="name" component={TextError} />
                </div>
                <div className="form-control">
                    <label htmlFor="surname">Surname</label>
                    <Field type="text" id="surname" name="surname" placeholder="Please Enter your surname" />
                    <ErrorMessage name="surname">{errorMsg => <div className="error">{errorMsg}</div>}</ErrorMessage>
                </div>
                <div className="form-control">
                    <label htmlFor="age">Age</label>
                    <Field type="text" id="age" name="age" placeholder="Please Enter your age" />
                    <ErrorMessage name="age">{errorMsg => <div className="error">{errorMsg}</div>}</ErrorMessage>
                </div>
                <div className="form-control">
                    <label htmlFor="address">Address</label>
                    <Field type="text" id="address" name="address" placeholder="Please Enter your address" />
                    <ErrorMessage name="address">{errorMsg => <div className="error">{errorMsg}</div>}</ErrorMessage>
                </div>
                <div className="form-control">
                    <label htmlFor="phoneNumbers">Mobile</label>
                    <Field type="text" id="phoneNumber" name="phoneNumber" placeholder="Please Enter your phone" as={PatternFormat} format="+### (##) ### ## ##" mask="#" />
                    <ErrorMessage name="phoneNumber">{errorMsg => <div className="error">{errorMsg}</div>}</ErrorMessage>
                </div>
                <Button type="submit" text="Checkout" />
            </Form>
        </Formik>
    );
};

export default BuyForm;
