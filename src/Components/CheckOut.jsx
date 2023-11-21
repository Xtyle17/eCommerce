import React, { useContext, useState } from "react";
import { CartContext } from "../Components/Provider/cartProvider";
import { ACTIONS } from "./reducer";
import { useForm } from "react-hook-form";

const CheckOut = () => {
  const [data, setData] = useState([]);
  const { state, dispatch, calculateTotal, getTotalQuantity } =
    useContext(CartContext);
  if (state.checkOut && state.checkOut.length >= 1) {
    console.log(state.checkOut);
  } else {
    console.log("no chechout");
  }
  const quantity = getTotalQuantity();
  const total = calculateTotal();
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, address, phoneNumber, cardNumber } = e;
    setData({ email, address, phoneNumber, cardNumber });
  };
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      address: "",
      phoneNumber: "",
      cardNumber: "",
    },
  });
  return (
    <div className="m-5">
      <div className="flex flex-col gap-y-5">
        {state.checkOut ? (
          state.checkOut.map((checkout) => {
            return (
              <div key={checkout.id} className="chkout ">
                <div className="">
                  <img
                    className="w-[200px]"
                    src={checkout.img[0]}
                    alt={checkout.name}
                  />
                  <h2>{checkout.name}</h2>
                </div>
                <div className="side">
                  <span>Price:${checkout.price}</span>
                  <span>Total Price: ${checkout.price * checkout.count}</span>
                  <span>Quantity:{checkout.count}</span>
                </div>
              </div>
            );
          })
        ) : (
          <p>no items for checkout</p>
        )}
      </div>
      {state.checkOut.length >= 1 ? (
        <div className="flex flex-col align-middle justify-center m-2">
          <div className="flex gap-x-5">
            {" "}
            <span>Total Price: ${total}</span> <span>Quantity: {quantity}</span>
          </div>
          <div>
            <form className="flex flex-col min-w-0 md:w-2/4 lg:w-1/4 xl:w-1/4">
              <label>Email Address</label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
                type="email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />{" "}
              {errors.email && (
                <p>Invalid email. Please follow the specified format.</p>
              )}
              <label> Address</label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
                type="text"
                name="address"
                {...register("address", {
                  required: true,
                })}
              />
              <label>Phone</label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
                type="tel"
                name="phoneNumber"
                {...register("phoneNumber", {
                  required: true,
                })}
              />
              <label>Card Number</label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
                type="number"
                name="cardNumber"
                {...register("cardNumber", {
                  required: true,
                  pattern: /^[0-9]{16}$/,
                  maxLength: 16,
                })}
              />
              <div className="flex gap-x-7 items-center">
                <div className="">
                  <input
                    type="radio"
                    id="visa"
                    name="cardType"
                    className="place-self-center"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png"
                    alt=""
                  />
                  <label htmlFor="visa">Visa</label>
                </div>
                <div>
                  <input type="radio" id="mastercard" name="cardType" />
                  <img
                    src="https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg"
                    alt=""
                  />
                  <label htmlFor="mastercard">Mastercard</label>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CheckOut;
