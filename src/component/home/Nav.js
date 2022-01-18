// import React from 'react';
// import { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { navItemHead } from './NavbarItems';
// import SubNav from './SubNav';
// import LogoColor from '../../image/gflasColor.png';

// const NavWrap = styled.ul`
//   color: #fff;
//   display: flex;
//   position: relative;
//   :hover {
//     width: 1000px;
//     z-index: 99;
//     background-color: #fff;
//     background-color: #dfa968;
//     color: #000;
//     position: absolute;
//     left: 0;
//   }
//   :hover .imgColor {
//     display: inline-block;
//   }
//   margin: 0;
//   li {
//     list-style: none;
//   }
//   li > a {
//     text-decoration: none;
//     color: inherit;
//     margin: 0;
//     display: inline-block;
//     padding: 25px;
//   }
//   ul:hover {
//     background-color: #fff;
//   }
// `;

// // const NavHoverWrap = styled.div``;

// const Nav = () => {
//   const [dropdown, setDropdown] = useState(false);
//   return (
//     <>
//       <NavWrap>
//         <img src={LogoColor} className='imgColor' alt='Logo-Color' />
//         {/* <ul className='allLists'> */}
//         {navItemHead.map(item => {
//           return (
//             <li
//               key={item.id}
//               className={item.cName}
//               onMouseEnter={() => {
//                 setDropdown(true);
//               }}
//               onMouseLeave={() => {
//                 setDropdown(false);
//               }}
//             >
//               <Link to={item.path}>{item.title}</Link>
//               {/* {item.title} */}
//               {/* {dropdown && <SubNav />} */}
//             </li>
//           );
//         })}

//         {/* <li>
//           <a href='.'>유전자가위 기술</a>
//           <ul className='subLists'>
//             <li>
//               <a href='/'>CRISPR Gene Edition</a>
//             </li>
//             <li>
//               <a href='/'>CRISPR PLUS</a>
//             </li>
//             <li>
//               <a href='/'>gfCas12a</a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a href='.'>사업분야</a>
//           <ul className='subLists'>
//             <li>
//               <a href='/'>Cancerase®</a>
//             </li>
//             <li>
//               <a href='/'>PDB Platform</a>
//             </li>
//             <li>
//               <a href='/'>Non-GMO Edition</a>
//             </li>
//             <li>
//               <a href='/'>Popeline</a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a href='.'>회사소개</a>
//           <ul className='subLists'>
//             <li>
//               <a href='/'>회사소개</a>
//             </li>
//             <li>
//               <a href='/'>특허현황</a>
//             </li>
//             <li>
//               <a href='/'>연혁</a>
//             </li>
//             <li>
//               <a href='/'>리더십</a>
//             </li>
//             <li>
//               <a href='/'>홍보영상</a>
//             </li>
//             <li>
//               <a href='/'>오시는 길</a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a href='.'>알림마당</a>
//           <ul className='subLists'>
//             <li>
//               <a href='/'>IR 공고·공시</a>
//             </li>
//             <li>
//               <a href='/'>공지 및 안내</a>
//             </li>
//             <li>
//               <a href='/'>보도자료</a>
//             </li>
//             <li>
//               <a href='/'>인재채용</a>
//             </li>
//             <li>
//               <a href='/'>사업개발</a>
//             </li>
//           </ul>
//         </li> */}
//         {/* </ul> */}
//       </NavWrap>
//       {dropdown && <SubNav />}
//     </>
//   );
// };

// export default Nav;
