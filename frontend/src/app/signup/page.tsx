import Image from 'next/image'
import Link from 'next/link'
export default function Signup(){
    return (
      <div className="flex flex-col justify-center items-center w-full h-[82vh]">

        <div className="flex items-center justify-center h-[10vh] text-xl font-bold">pick IT up 회원가입</div>
        <div className="h-[30vh] w-[48vw] h-[62vh] rounded-[10px] border border-f5gray-400">
          
          <form action="#" method="POST">
            <div className='flex w-full h-[6vh] justify-center items-center mt-4'>
              <label htmlFor="id" className="w-[10vw] text-lg font-black">아이디</label>
              <input className="w-[16vw] h-[4vh] rounded-md  border border-f5gray-400
              bg-gray-200 appearance-none border-2 border-gray-200 
              text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-f5green-300 
              "/>
              <div className='w-[1vw]'></div>
              <div className='w-[7vw] h-[4vh] flex items-center justify-center rounded-md bg-f5green-300 text-xs text-white font-bold'>중복확인</div>
            </div>
            <div className='flex w-full h-[1vh] justify-center items-center mb-2'>
              <div className="w-[10vw]"></div>
              <div className='w-[24vw] text-xs text-[#5A85C5]'>사용 가능한 아이디입니다!</div>
              {/* <div className='w-[24vw] text-xs text-[#C55A5A]'>사용할 수 없는 아이디입니다!</div> */}
            </div>

            <div className='flex w-full h-[6vh] justify-center items-center'>
              <label htmlFor="password" className='w-[10vw] text-lg font-black'>비밀번호</label>
              <input type="password" className="w-[24vw] h-[4vh] rounded-md  border border-f5gray-400
              bg-gray-200 appearance-none border-2 border-gray-200
              text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-f5green-300 
              "/>
            </div>
            <div className='flex w-full h-[1vh] justify-center items-center mb-2'>
              <div className="w-[10vw]"></div>
              <div className='w-[24vw] text-xs text-[#C55A5A]'>영문자, 숫자를 포함하여 8자 이상을 입력해주세요</div>
            </div>

            <div className='flex w-full h-[6vh] justify-center items-center'>
              <label htmlFor="password" className='w-[10vw] text-lg font-black'>비밀번호 확인</label>
              <input type="password" className="w-[24vw] h-[4vh] rounded-md  border border-f5gray-400
              bg-gray-200 appearance-none border-2 border-gray-200 
              text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-f5green-300 
              "/>
            </div>
            <div className='flex w-full h-[1vh] justify-center items-center mb-2'>
              <div className="w-[10vw]"></div>
              <div className='w-[24vw] text-xs text-[#C55A5A]'>위의 비밀번호와 동일하게 입력해주세요</div>
            </div>

            <div className='flex w-full h-[6vh] justify-center items-center'>
              <div className='w-[10vw] text-lg font-black'>이름</div>
              <input className="w-[24vw] h-[4vh] rounded-md  border border-f5gray-400
              bg-gray-200 appearance-none border-2 border-gray-200
              text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-f5green-300 
              "/>
            </div>
            
            <div className='w-full h-[1vh] mb-2'/>

            <div className='flex w-full h-[6vh] justify-center items-center'>
              <label className="w-[10vw] text-lg font-black">이메일 인증</label>
              <input placeholder="example@naver.com" className="w-[16vw] h-[4vh] rounded-md  border border-f5gray-400
              bg-gray-200 appearance-none border-2 border-gray-200
              text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-f5green-300
              "/>
              <div className='w-[1vw]'></div>
              <div className='w-[7vw] h-[4vh] flex items-center justify-center rounded-md bg-f5green-300 text-xs text-white font-bold'>인증번호 요청</div>
              {/* <div className='w-[7vw] h-[4vh] flex items-center justify-center rounded-md bg-f5green-300 text-white font-bold'>재요청</div> */}
            </div>
            <div className='flex w-full h-[6vh] justify-center items-center'>
              <div className="w-[10vw] font-black"></div>
              <input placeholder="인증번호 입력" className="w-[16vw] h-[4vh] rounded-md  border border-f5gray-400
              bg-gray-200 appearance-none border-2 border-gray-200
              text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-f5green-300 
              "/>
              <div className='w-[1vw]'></div>
              <div className='w-[7vw] h-[4vh] flex items-center justify-center rounded-md bg-f5green-300 text-xs text-white font-bold'>인증</div>
              {/* <div className='w-[7vw] h-[4vh] flex items-center justify-center rounded-md bg-f5green-300 text-white font-bold'>인증완료</div> */}
            </div>

            <div className="flex w-full h-[14vh] justify-center items-center">
              <button type="submit" className="w-[24vw] h-[6vh] rounded-md bg-f5green-300 text-white font-bold">회원가입</button>
            </div>
          </form>
        </div>
      </div>
    )
}