"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Goldcalculator = () => {
const [weight, setWeight] = useState<number>(1);
const [currency, setCurrency] = useState<string>('PKR');
const [purity, setPurity] = useState<number>(24);
const [goldPrice, setGoldPrice] = useState<number>(0);
const [calculatedPrice, setCalculatedPrice] = useState<number>(0);

interface GoldPriceResponse {
    price: number;
    currency: string;
  }

const currency_prices = {
  USD: 94.30,
  PKR: 26792,
  EUR: 90.17
}

useEffect(() => {
    setGoldPrice(currency_prices[currency as keyof typeof currency_prices] || 0);
  });

  useEffect(() => {
    const purityPercentage = purity / 24;
    const price = weight * (goldPrice * purityPercentage);
    setCalculatedPrice(price);
  });

  return (
    <div className='main_calculator absolute top-0 left-0 right-0 bottom-0 w-full h-full'>
    <div className="flex justify-center items-center flex-col h-full">
        <div className='maintaince-box p-6 bg-white rounded-lg shadow-md'>
      <h1 className="text-2xl font-bold mb-6 text-center text-yellow-600">
        Gold Calculator
      </h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Weight (grams)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Currency
          </label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border text-black"
          >
            <option value="USD">USD</option>
            <option value="PKR">PKR</option>
            <option value="EUR">Euro</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Purity
          </label>
          <select
            value={purity}
            onChange={(e) => setPurity(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border text-black"
          >
            <option value={24}>24K (99.9%)</option>
            <option value={22}>22K (91.6%)</option>
            <option value={18}>18K (75%)</option>
          </select>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <h2 className="text-lg font-semibold text-yellow-800">
            Calculated Price:
          </h2>
          <p className="text-2xl font-bold text-yellow-600">
            {calculatedPrice.toFixed(2)} {currency}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Current Gold Price: {goldPrice.toFixed(2)} {currency}/gram (24K)
          </p>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Goldcalculator
