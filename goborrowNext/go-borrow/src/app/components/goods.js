'use client'
import styled from 'styled-components';
import Image from 'next/image';

const Head_one = styled.h1`
  margin-bottom: 10px;
`;

const Item = styled.div`
  border: 1px solid #ccc;
  width: calc(20% - 10px);
  height: 250px;    
  margin-bottom: 5px;
  overflow: hidden;
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  `;

const ItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  `;

const ItemImg = styled.div`
  position: relative;
  height: 70%;
  overflow: hidden;
  width : 100%;
   `;

const NamePriceDiv = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
    `;

const ItemName = styled.div`
  font-size: 17px;
  padding-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceDiv = styled.div`
  font-size: 17px;
  display: flex;
  justify-content: space-between;
`;

const ItemPrice = styled.div`

`;

const ItemTimestamp = styled.div`
  font-size: 14px;
  color: #999;
  `;

const goodsList = [
    {
        img: '/goods1.jpeg',
        description: '체크 셔츠',
        price: '39,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
    {
        img: '/goods1.jpeg',
        description: '셔츠',
        price: '29,000원',
        time: '2시간전',
    },
]

const Goods = () => {
    return (
        <>
            <Head_one>오늘의 상품 추천</Head_one>
            <ItemWrap>
                {goodsList.map((item, index) => (
                    <Item key={index}>
                        <ItemImg >
                            <Image fill={true} src={item.img} alt='goods' />
                        </ItemImg>
                        <NamePriceDiv>
                            <ItemName>
                                {item.description}
                            </ItemName>
                            <PriceDiv>
                                <ItemPrice>{item.price}</ItemPrice>
                                <ItemTimestamp>{item.time}</ItemTimestamp>
                            </PriceDiv>
                        </NamePriceDiv>
                    </Item>
                ))}
            </ItemWrap>
        </>
    );
}

export default Goods;