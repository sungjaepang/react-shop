/* 260603 front프로젝트 시작 */


/* 3단계 상품 상세 페이지 연결 - 3. 라우터에 상세 페이지 추가 App.jsx & main.jsx */
/* 11단계 TanStack Query 적용 (API 로직 실무형) */
/* 12단계 Toast 알림 - 2. Toaster 추가 */
/*  */
/* + BrowserRouter를 HashRouter로 변경 */
/*  */


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from "react-router-dom"; /* 변경 전 */
import { HashRouter } from "react-router-dom"; /* 변경 후 */
// 11단계
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// 12단계
import { Toaster } from "react-hot-toast";
import App from './App.jsx';

import './index.css';
import './App.css';


// 11단계
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 11단계 */}
    <QueryClientProvider client={queryClient}>
      {/* <BrowserRouter> */}
      <HashRouter>
        <App />
        {/* 12단계 */}
        <Toaster position="top-center" />
      </HashRouter>
    </QueryClientProvider>
  </StrictMode>,
);
