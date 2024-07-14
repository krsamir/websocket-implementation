import styled from "styled-components";
import { CONSTANT } from "./Constants";
export const ProductPage = {};

export const COUNT_DOWN = {
  CONTAINER: styled.div`
    background-color: #ff3f6c;
    text-align: center;
    padding: 10px;
    margin: 20px;
    font-size: 25px;
    color: #fff;
    font-weight: 700;
    border-radius: 4px;
  `,
  TEXT: styled.span`
    margin-right: 10px;
  `,
};

export const Card = {
  Container: styled.div`
    width: ${({ size }) => (size === CONSTANT.BIG ? "360px" : "210px")};
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    cursor: ${({ size }) => (size === CONSTANT.BIG ? "auto" : "pointer")};
  `,
  Image: styled.img`
    width: ${({ size }) => (size === CONSTANT.BIG ? "360px" : "210px")};
    height: ${({ size }) => (size === CONSTANT.BIG ? "400px" : "210px")};
  `,
  Name: styled.h3`
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    color: #282c3f;
    margin-bottom: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  Description: styled.h4`
    color: #535766;
    font-size: 14px;
    line-height: 1;
    margin-bottom: 0;
    margin-top: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    display: block;
  `,
  Price: styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 4px;
  `,
  Actual: styled.span`
    font-size: 14px;
    font-weight: 700;
    color: #282c3f;
  `,
  Cost: styled.div`
    text-decoration: line-through;
    color: #7e818c;
    font-weight: 400;
    margin-left: 5px;
    font-size: 12px;
    margin-left: 5px;
  `,
  Discount: styled.div`
    color: #ff905a;
    font-weight: 400;
    font-size: 12px;
    margin-left: 5px;
  `,
};

export const BIDDING_ZONE = {
  FLEX_CONTAINER: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  CONTAINER: styled.div`
    height: 470px;
    width: 500px;
    border: 5px solid #ff3f6c;
    border-radius: 4px;
  `,
  TOP_CONTAINER: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    border-bottom: 5px solid #ff3f6c;
  `,
  NAME: styled.div`
    margin-left: 4px;
    flex: 1;
    font-size: 20px;
  `,
  COST: styled.div`
    font-size: 16px;
    background-color: #ebebeb;
    padding: 4px 10px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  TAG: styled.div`
    background-color: #282c3f;
    color: #fff;
    padding: 2px 5px;
    border-radius: 6px;
    margin-left: 5px;
  `,
  BOTTOM: styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 10px;
    height: 340px;
    flex: 1;
  `,
  COST_CARD: styled.div`
    background-color: #282c3f;
    color: #fff;
    padding: 6px 12px;
    font-size: 22px;
    border-radius: 6px;
    margin-bottom: 10px;
  `,
  LOWER_PART: styled.div`
    border-top: 5px solid #ff3f6c;
    padding: 10px;
  `,
  INPUT: styled.input`
    width: 82%;
    padding: 5px;
    border: none;
    background-color: #ebebeb;
    outline: none;
  `,
  BUTTON: styled.span`
    background-color: #ff3f6c;
    color: #fff;
    padding: 2px 20px;
    font-size: 18px;
    margin-left: 5px;
    border-radius: 4px;
    cursor: pointer;
  `,
};
