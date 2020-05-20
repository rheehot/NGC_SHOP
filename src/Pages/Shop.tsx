import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../Components/Layout";
import ShopBar from "../Components/ShopBar";
import Product from "../Components/Product";
import { ShopMenus } from "../data/data";
import { FrontData } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux";
import {
  setCurrentPage,
  setProduct,
  setPageArray,
  setSlide,
} from "../Redux/pageNation";
const Shop = () => {
  const [boolOne, setBoolOne] = useState<boolean>(false);
  const [boolTwo, setBoolTwo] = useState<boolean>(false);
  const { pageArray, currentPage, slide, product } = useSelector(
    (redux: RootState) => redux.pageNation
  );
  const dispatch = useDispatch();
  const setProductData = () => dispatch(setProduct(FrontData));
  const setPageArrData = () => dispatch(setPageArray(FrontData));
  useEffect(() => {
    setProductData();
    setPageArrData();
  }, []);
  const changeCurrentNum = (currentPage: number) =>
    dispatch(setCurrentPage(currentPage));

  const Last = currentPage * slide;
  const First = Last - slide;
  const SlideData = product.slice(First, Last);
  const lowPrice = (e: boolean) => {
    setBoolOne(e);
    setBoolTwo(false);
    if (boolOne === true) {
      FrontData.sort((a: any, b: any) => {
        return parseInt(b.price) - parseInt(a.price);
      });
    } else {
      FrontData.sort((a: any, b: any) => {
        return parseInt(a.price) - parseInt(b.price);
      });
    }
    console.log(FrontData);
    console.log(e + "인자값");
    console.log(boolOne + "첫번째");
    console.log(boolTwo + "두번째");
  };
  const highPrice = (e: boolean) => {
    setBoolTwo(e);
    setBoolOne(false);
    if (boolTwo === true) {
      FrontData.sort((a: any, b: any) => {
        return parseInt(a.price) - parseInt(b.price);
      });
    } else {
      FrontData.sort((a: any, b: any) => {
        return parseInt(b.price) - parseInt(a.price);
      });
    }
    console.log(FrontData);
    console.log(e + "인자값");
    console.log(boolOne + "첫번째");
    console.log(boolTwo + "두번째");
  };

  return (
    <Layout>
      <div>
        <ShopDiv>
          <ShopMenu>
            <MenuBar>TOP</MenuBar>
            {ShopMenus.map((el) => {
              return <ShopBar info={el} />;
            })}
          </ShopMenu>

          <ShopProduct>
            <ListNum>
              <span>
                상품&nbsp;<h1>{FrontData.length}</h1>&nbsp;개
              </span>
              <div>
                <PickList>
                  <li
                    style={boolOne ? { color: "red" } : { color: "#111" }}
                    onClick={() => lowPrice(true)}
                  >
                    낮은가격순
                  </li>

                  <li
                    style={boolTwo ? { color: "red" } : { color: "#111" }}
                    onClick={() => highPrice(true)}
                  >
                    높은가격순
                  </li>
                </PickList>
              </div>
            </ListNum>

            <ProductDiv>
              {SlideData.map((el: any) => {
                return (
                  <Product
                    img={el.img}
                    name={el.name}
                    sale={el.sale}
                    price={el.price}
                  />
                );
              })}
            </ProductDiv>

            <Pagination>
              <ul>
                {pageArray.map((el, index) => {
                  return (
                    <span onClick={() => changeCurrentNum(index + 1)}>
                      {el}
                    </span>
                  );
                })}
              </ul>
            </Pagination>
          </ShopProduct>
        </ShopDiv>
        <Empty />
      </div>
    </Layout>
  );
};

const ShopDiv = styled.div`
  display: flex;
  width: 100%;
`;
const Empty = styled.div`
  width: 100%;
  height: 100px;
`;
const ShopMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  min-width: 277px;
  margin-top: 50px;
  margin-left: 20px;
`;
const MenuBar = styled.div`
  width: 100%;

  height: 41px;
  color: #111111;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #111;
`;
const ShopProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 1100px;
  margin-left: 30px;
  margin-top: 50px;
`;
const ListNum = styled.div`
  width: 100%;
  height: 79.8px;
  color: #111111;
  font-size: 14px;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
  span {
    display: flex;
    width: 100%;
    height: 30.8px;
    border-bottom: 1px solid #111;
    h1 {
      font-weight: bold;
    }
  }
  div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 49px;
    color: #111111;
  }
`;
const PickList = styled.ul`
  display: flex;
  width: 525.05px;
  height: 22.6px;

  li {
    display: flex;
    align-items: center;
    width: 73.13px;
    height: 22.6px;
    font-size: 12px;
    cursor: pointer;
  }
`;
const ProductDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const Pagination = styled.div`
  width: 100%;
  height: 70px;
  border-top: 1px solid #e6e6e6;
  margin-top: 40px;
  margin-bottom: 80px;
  ul {
    display: flex;
    justify-content: center;
    height: 48px;
    width: 100%;
    margin-top: 40px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 26px;
      height: 26px;
      font-size: 12px;
      border: 1px solid black;
      margin-right: 5px;
      :hover {
        border: 1px solid gray;
      }
    }
  }
`;
export default Shop;
