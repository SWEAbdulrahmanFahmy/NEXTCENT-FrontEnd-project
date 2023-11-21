import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row  py-7 px-40 justify-between'>
      <svg width="150" height="32" viewBox="0 0 108 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3106 9.17145L9.55815 15.5982L5.80572 9.17145H13.3106ZM14.3159 8.59705H4.79639L9.55815 16.7349L14.3159 8.59705Z" fill="#263238"/>
      <path d="M19.8348 1.17808L23.5872 7.60481H16.0823L19.8348 1.17808ZM19.8348 0.0292969L15.073 8.16715H24.5966L19.8348 0.0292969Z" fill="#263238"/>
      <path d="M0.233887 0.0292969L4.22647 7.22725L8.5894 0.210039L0.233887 0.0292969Z" fill="#4CAF4F"/>
      <path d="M9.55813 0.659912L13.7461 7.8177H5.36206L9.55813 0.659912Z" fill="#4CAF4F"/>
      <path d="M14.8245 9.38037L19.0165 16.735H10.4331L14.6943 9.38037H14.8245Z" fill="#4CAF4F"/>
      <path d="M15.7322 8.93445L19.8346 16.1766L23.9941 8.93445H15.7322Z" fill="#4CAF4F"/>
      <path d="M42.021 1.19104V15.3655H39.4325L33.2657 6.44419H33.1619V15.3655H30.165V1.19104H32.7951L38.9134 10.1055H39.0379V1.19104H42.021Z" fill="#263238"/>
      <path d="M49.2864 15.5732C48.1929 15.5732 47.2516 15.3517 46.4626 14.9087C45.6782 14.4612 45.0738 13.8291 44.6493 13.0124C44.2248 12.191 44.0125 11.2198 44.0125 10.0986C44.0125 9.00501 44.2248 8.04528 44.6493 7.21936C45.0738 6.39343 45.6713 5.74977 46.4418 5.28836C47.217 4.82695 48.126 4.59624 49.1688 4.59624C49.8701 4.59624 50.523 4.70929 51.1275 4.93538C51.7365 5.15686 52.2671 5.49138 52.7193 5.93895C53.1761 6.38651 53.5314 6.94943 53.7852 7.62771C54.039 8.30136 54.1658 9.09037 54.1658 9.99474V10.8045H45.1891V8.97733H51.3905C51.3905 8.55283 51.2982 8.17678 51.1136 7.84918C50.9291 7.52158 50.673 7.2655 50.3454 7.08093C50.0224 6.89176 49.6463 6.79717 49.2172 6.79717C48.7697 6.79717 48.3728 6.90098 48.0268 7.10862C47.6853 7.31164 47.4177 7.58618 47.2239 7.93224C47.0301 8.27368 46.9309 8.65434 46.9263 9.07422V10.8114C46.9263 11.3374 47.0232 11.7919 47.217 12.1749C47.4154 12.5579 47.6946 12.8532 48.0545 13.0608C48.4144 13.2684 48.8412 13.3723 49.3349 13.3723C49.6625 13.3723 49.9624 13.3261 50.2346 13.2338C50.5069 13.1416 50.7399 13.0031 50.9337 12.8186C51.1275 12.634 51.2751 12.4079 51.3766 12.1403L54.1036 12.3202C53.9651 12.9754 53.6814 13.5476 53.2522 14.0367C52.8278 14.5212 52.2787 14.8995 51.605 15.1718C50.936 15.4394 50.1631 15.5732 49.2864 15.5732Z" fill="#263238"/>
      <path d="M58.3635 4.73467L60.3153 8.45132L62.3155 4.73467H65.34L62.2601 10.0501L65.4231 15.3655H62.4124L60.3153 11.6904L58.2528 15.3655H55.2075L58.3635 10.0501L55.3182 4.73467H58.3635Z" fill="#263238"/>
      <path d="M71.5137 15.5732C70.4248 15.5732 69.4881 15.3425 68.7037 14.8811C67.9239 14.415 67.3241 13.7691 66.9042 12.9431C66.4889 12.1172 66.2813 11.1667 66.2813 10.0916C66.2813 9.00271 66.4912 8.04759 66.9111 7.22628C67.3356 6.40036 67.9378 5.75669 68.7175 5.29528C69.4973 4.82926 70.4248 4.59624 71.4998 4.59624C72.4273 4.59624 73.2394 4.76466 73.9361 5.10149C74.6328 5.43832 75.1842 5.91126 75.5902 6.52032C75.9963 7.12938 76.2201 7.84457 76.2616 8.66588H73.4793C73.4009 8.13526 73.1932 7.70845 72.8564 7.38547C72.5242 7.05786 72.0881 6.89406 71.5483 6.89406C71.0915 6.89406 70.6924 7.01864 70.3509 7.26781C70.0141 7.51235 69.7511 7.86995 69.5619 8.34058C69.3727 8.81122 69.2782 9.38106 69.2782 10.0501C69.2782 10.7284 69.3704 11.3051 69.555 11.7804C69.7442 12.2556 70.0095 12.6179 70.3509 12.867C70.6924 13.1162 71.0915 13.2408 71.5483 13.2408C71.8851 13.2408 72.1874 13.1715 72.455 13.0331C72.7272 12.8947 72.951 12.694 73.1263 12.431C73.3063 12.1634 73.4239 11.8427 73.4793 11.4689H76.2616C76.2155 12.281 75.994 12.9962 75.5972 13.6145C75.205 14.2282 74.6628 14.708 73.9707 15.0541C73.2786 15.4002 72.4596 15.5732 71.5137 15.5732Z" fill="#263238"/>
      <path d="M82.9941 15.5732C81.9006 15.5732 80.9593 15.3517 80.1703 14.9087C79.3859 14.4612 78.7815 13.8291 78.357 13.0124C77.9325 12.191 77.7202 11.2198 77.7202 10.0986C77.7202 9.00501 77.9325 8.04528 78.357 7.21936C78.7815 6.39343 79.379 5.74977 80.1495 5.28836C80.9247 4.82695 81.8337 4.59624 82.8765 4.59624C83.5778 4.59624 84.2307 4.70929 84.8352 4.93538C85.4442 5.15686 85.9748 5.49138 86.427 5.93895C86.8838 6.38651 87.2391 6.94943 87.4929 7.62771C87.7467 8.30136 87.8735 9.09037 87.8735 9.99474V10.8045H78.8968V8.97733H85.0982C85.0982 8.55283 85.0059 8.17678 84.8213 7.84918C84.6368 7.52158 84.3807 7.2655 84.0531 7.08093C83.7301 6.89176 83.354 6.79717 82.9249 6.79717C82.4774 6.79717 82.0806 6.90098 81.7345 7.10862C81.393 7.31164 81.1254 7.58618 80.9316 7.93224C80.7378 8.27368 80.6386 8.65434 80.634 9.07422V10.8114C80.634 11.3374 80.7309 11.7919 80.9247 12.1749C81.1231 12.5579 81.4023 12.8532 81.7622 13.0608C82.1221 13.2684 82.5489 13.3723 83.0426 13.3723C83.3702 13.3723 83.6701 13.3261 83.9423 13.2338C84.2146 13.1416 84.4476 13.0031 84.6414 12.8186C84.8352 12.634 84.9828 12.4079 85.0843 12.1403L87.8113 12.3202C87.6728 12.9754 87.3891 13.5476 86.96 14.0367C86.5355 14.5212 85.9864 14.8995 85.3127 15.1718C84.6437 15.4394 83.8708 15.5732 82.9941 15.5732Z" fill="#263238"/>
      <path d="M92.746 9.21957V15.3655H89.7976V4.73467H92.6076V6.6103H92.7322C92.9675 5.99201 93.362 5.50291 93.9157 5.14301C94.4694 4.7785 95.1407 4.59624 95.9298 4.59624C96.668 4.59624 97.3117 4.75774 97.8608 5.08072C98.4098 5.40371 98.8366 5.86512 99.1412 6.46495C99.4457 7.06017 99.598 7.77074 99.598 8.59667V15.3655H96.6496V9.12267C96.6542 8.47209 96.4881 7.96453 96.1512 7.60002C95.8144 7.23089 95.3507 7.04633 94.7601 7.04633C94.3633 7.04633 94.0126 7.13169 93.7081 7.30241C93.4082 7.47313 93.1728 7.72229 93.0021 8.0499C92.836 8.37288 92.7506 8.76277 92.746 9.21957Z" fill="#263238"/>
      <path d="M107.576 4.73467V6.94943H101.174V4.73467H107.576ZM102.628 2.18769H105.576V12.0988C105.576 12.371 105.618 12.5832 105.701 12.7355C105.784 12.8832 105.899 12.987 106.047 13.047C106.199 13.1069 106.374 13.1369 106.573 13.1369C106.711 13.1369 106.85 13.1254 106.988 13.1023C107.126 13.0746 107.233 13.0539 107.306 13.04L107.77 15.234C107.622 15.2802 107.415 15.3332 107.147 15.3932C106.88 15.4578 106.554 15.497 106.171 15.5109C105.461 15.5386 104.838 15.444 104.303 15.2271C103.772 15.0103 103.359 14.6734 103.064 14.2166C102.768 13.7598 102.623 13.1831 102.628 12.4863V2.18769Z" fill="#263238"/>
      </svg>
      <div className=' text-xl flex flex-row gap-8'>
          <div>Home</div>
          <div>Features</div>
          <div>Community</div>
          <div>Blog</div>
          <div>Pricing</div>
            <button className='animate-pulse -my-2 text-lg flex flex-row  rounded-md bg-[#4CAF4F] text-white gap-3 px-5 py-2'>
              Register Now
                  <svg width="16" height="16" viewBox="0 0 9 6" fill="none" className='my-2 animate-bounce' xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.52582 5.47034L8.24492 3.75123C8.4488 3.54735 8.4488 3.2168 8.24492 3.01292L6.52582 1.29381M8.09201 3.38207L0.435058 3.38207" stroke="white" stroke-width="0.765676" stroke-linecap="round"/>
                  </svg>
            </button>
      </div>
  
    </div>
  )
}

export default Header;
