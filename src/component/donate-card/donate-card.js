import React, { useState } from 'react';
import fetch from 'isomorphic-fetch';

import { Button } from '../button/button';
import { Card, TrayHeader, TrayBody, DonateCardBody, CloseTrayButton, AlertMessage, AlertSection, RadioSection } from './donate-card.style';

import img1 from '../../images/baan-kru-noi.jpg';
import img2 from '../../images/habitat-for-humanity-thailand.jpg';
import img3 from '../../images/makhampom-theater.jpg';
import img4 from '../../images/thailand-association-of-the-blind.jpg';
import img5 from '../../images/paper-ranger.jpg';

export const DonateCard = ({ item, appProps }) => {
  const [showPaymentMethod, setShowPaymentMethod] = useState(false)
  const [curentValue, setCurrentValue] = useState(null)
  const [showMessage, setShowMessage] = useState(false)
  const [disablePayButton, setDisablePayButton] = useState(true)

  const onPayButtonClick = (e) => {
    e.stopPropagation()
    if (curentValue) {
      appProps.dispatch({
        type: 'UPDATE_TOTAL_DONATE',
        amount: curentValue,
      })
      setShowMessage(true)
      handlePay(item.id, curentValue, item.currency)
    }
  }

  const onCloseTray = (e) => {
    e.stopPropagation()
    setShowPaymentMethod(false)
    setShowMessage(false)
  }

  const getImg = (imgFileName) => {
    const imgName = imgFileName.split('.')[0];
    const mapping = {
      'baan-kru-noi': img1,
      'habitat-for-humanity-thailand': img2,
      'makhampom-theater': img3,
      'thailand-association-of-the-blind': img4,
      'paper-ranger': img5,
    }
    return mapping[imgName]
  }

  return (
    <Card key={item.id} $img={getImg(item.image)}>
      <TrayHeader $stretch={showPaymentMethod}>
        <p>{item.name}</p>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setShowPaymentMethod(true);
          }}>Donate</Button>
      </TrayHeader>
      <TrayBody
        $show={showPaymentMethod}
      >
        <DonateCardBody>
          <CloseTrayButton onClick={onCloseTray}>x</CloseTrayButton>
          <AlertSection $show={showMessage}>
            <AlertMessage>
              Completed donation. Thank you! 
            </AlertMessage>
          </AlertSection>
          <p>{item.name}</p>
          <RadioSection>
            {[10, 20, 50, 100, 500].map((amount, j) => (
              <label key={j}>
                <input
                  type="radio"
                  name="payment"
                  value={amount}
                  onClick={function (e) {
                    e.stopPropagation()
                    setCurrentValue(amount)
                    setDisablePayButton(false)
                  }}
                />
                {amount}
              </label>))}
          </RadioSection>
          <Button
            onClick={onPayButtonClick}
            $disable={disablePayButton}
          >
            Pay
          </Button>
        </DonateCardBody>
      </TrayBody>
    </Card>
  )
}

/**
 * Handle pay button
 * 
 * @param {*} The charities Id
 * @param {*} amount The amount was selected
 * @param {*} currency The currency
 * 
 * @example
 * fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
 */
function handlePay(id, amount, currency) {
  fetch('http://localhost:3001/payments', {
    method: 'POST',
    body: JSON.stringify({
      charitiesId: id,
      amount: Number(amount),
      currency,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}