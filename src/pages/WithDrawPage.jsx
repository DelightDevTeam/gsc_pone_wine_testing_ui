import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseUrl';
import useFormSubmit from '../hooks/useFormSubmit';
import { Spinner } from 'react-bootstrap';

const WithDrawPage = () => {

  const [amount, setAmount] = useState(0);
  const [payment, setPayment] = useState("");
  const [account_no, setAccountNo] = useState("");
  const [account_name, setAccountName] = useState("");
  // const [note, setNote] = useState("");
  const [password, setPassword] = useState("");

  const { data: banks } = useFetch(BASE_URL + '/agentPaymentType');
  const bank = banks && banks.find(bank => bank.id == parseInt(banks[0]?.id));

  useEffect(() => {
      setPayment(bank && banks[0]?.id);
  }, [bank]);

  const { inputSubmit, error, errMsg, loading } = useFormSubmit();

  const withdraw = async (e) => {
    e.preventDefault();
    const inputData = {
      account_name,
      account_number: account_no,
      amount,
      "payment_type_id": payment,
      // "note": note,
      password
    }
    // console.log(inputData);
    let url = BASE_URL + '/withdrawTest';
    let method = 'POST';
    let redirect = "/wallet";
    let msg = "Withdraw Successful";
    inputSubmit(url, inputData, method, redirect, msg);
  }



  return (
    <div className='depositBg p-3'>
      <h5 className="fw-semibold text-center mb-4 text-center">Withdraw</h5>
      <form onSubmit={withdraw}>
        <div className="mb-3">
          <small className="customInputTitle">Bank Account</small>
          <select className='form-control form-select bg-transparent text-white'
            onChange={e => setPayment(e.target.value)}
            value={payment}
          >
            {banks && banks.map((bank, index) => (
              <option key={index} value={bank.payment_type_id}>{bank.payment_type}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <small className="customInputTitle">Account Name</small>
          <input type="text"
            className='w-full customInput'
            onChange={(e) => setAccountName(e.target.value)}
            value={account_name}
          />
          {error && error.account_name && <span className='text-danger'>{error.account_name}</span>}
        </div>
        <div className="mb-3">
          <small className="customInputTitle">Account No</small>
          <input type="text"
            className='w-full customInput'
            onChange={(e) => setAccountNo(e.target.value)}
            value={account_no}
          />
          {error && error.account_number && <span className='text-danger'>{error.account_number}</span>}
        </div>
        <div className="mb-3">
          <small className="customInputTitle">Amount</small>
          <input type="number"
            className='w-full customInput'
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
          {error ? (error.amount && <span className='text-danger'>{error.amount}</span>) : errMsg && <span className='text-danger'>{errMsg}</span>}
        </div>

        {/* <div className="mb-3">
          <small className="customInputTitle">Note</small>
          <textarea className='w-full customInput bg-transparent'
            placeholder='Enter note'
            onChange={e => setNote(e.target.value)}
            value={note}
          ></textarea>
          {error && error.note && <span className='text-danger'>{error.note}</span>}
        </div> */}

        <div className="mb-3">
          <small className="customInputTitle">Password</small>
          <input type="password"
            className='w-full customInput'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {error && error.password && <span className='text-danger'>{error.password}</span>}
        </div>
        <button type='submit' className="mt-4 py-2 text-white btn2 w-full rounded-5">
        {loading && <Spinner size="sm" className='me-2' />}
          Submit
        </button>
      </form>
    </div>
  )
}

export default WithDrawPage
