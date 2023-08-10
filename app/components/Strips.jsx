import React from 'react'

const Strips = () => {
  return (
    <div className="text-white py-52 bg-black flex flex-col gap-8 overflow-hidden" data-scroll-section>
     <div className=" h-[6rem] bg-secondary relative rotate-[1.5deg]  -translate-x-[40px] w-[110%] mx-auto">
        <svg className="absolute top-[23px]  left-0" width="350" height="51" viewBox="0 0 386 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M83.348 41.3859C76.9489 41.4976 72.5647 37.8535 72.453 31.4545L72.1354 13.2573L76.1347 13.1875L76.4545 31.5047C76.5243 35.5041 79.2837 37.7363 83.2831 37.6664C87.3224 37.5959 90.0022 35.2688 89.9324 31.2694L89.6127 12.9522L93.6121 12.8824L93.9297 31.0796C94.0414 37.4787 89.787 41.2735 83.348 41.3859ZM98.9119 40.7942L98.5601 20.6372L102.439 20.5695L102.502 24.129C103.537 21.5905 105.913 20.1888 108.913 20.1365C113.472 20.0569 116.489 23.2847 116.573 28.084L116.789 40.4821L112.91 40.5498L112.707 28.9116C112.651 25.7121 110.733 23.5852 107.894 23.6348C104.734 23.6899 102.539 26.2886 102.601 29.8081L102.791 40.7264L98.9119 40.7942ZM121.96 40.3919L121.461 11.7962L125.34 11.7285L125.839 40.3241L121.96 40.3919ZM140.221 40.3931C134.182 40.4986 129.747 36.2153 129.642 30.1762C129.536 24.1372 133.819 19.7017 139.858 19.5963C145.898 19.4909 150.293 23.7748 150.398 29.8139C150.504 35.853 146.261 40.2877 140.221 40.3931ZM140.162 36.9937C143.962 36.9273 146.511 34.0024 146.439 29.883C146.367 25.7637 143.717 22.9295 139.918 22.9958C136.078 23.0628 133.529 25.9877 133.601 30.1071C133.673 34.2265 136.323 37.0607 140.162 36.9937ZM163.216 39.9918C156.857 40.1028 153.133 35.327 153.036 29.7679C152.939 24.2087 156.494 19.3059 162.853 19.1949C167.573 19.1126 171.701 21.8409 172.34 26.3905L168.461 26.4582C168.061 24.1848 165.712 22.5455 162.993 22.593C158.953 22.6635 157.008 25.818 157.076 29.6974C157.144 33.5768 159.238 36.6607 163.237 36.5909C165.997 36.5427 168.011 35.0673 168.611 32.7765L172.451 32.7095C171.885 36.96 168.336 39.9024 163.216 39.9918ZM190.122 39.2021L182.715 29.6899L180.235 32.0535L180.363 39.3724L176.444 39.4408L175.945 10.8452L179.864 10.7768L180.152 27.2543L188.77 19.0626L193.809 18.9746L185.468 27.0014L194.921 39.1183L190.122 39.2021ZM208.839 12.3913L212.718 12.3236L212.829 18.6427L218.788 18.5386L218.846 21.8981L212.887 22.0022L213.063 32.0806C213.101 34.2403 214.282 35.4199 216.241 35.3857L219.081 35.3361L219.14 38.6956L215.98 38.7507C211.901 38.8219 209.258 36.3877 209.186 32.2683L209.008 22.0699L204.888 22.1418L204.83 18.7823L208.949 18.7104L208.839 12.3913ZM223.155 38.6255L222.656 10.0298L226.536 9.96212L226.745 21.9603C227.781 19.4218 230.157 18.0201 233.156 17.9678C237.716 17.8882 240.733 21.116 240.816 25.9153L241.033 38.3134L237.153 38.3811L236.95 26.7429C236.894 23.5434 234.977 21.4165 232.137 21.4661C228.978 21.5213 226.783 24.12 226.844 27.6394L227.035 38.5578L223.155 38.6255ZM260.282 31.4164L264.162 31.3487C263.514 35.5206 259.922 38.3038 254.963 38.3903C248.724 38.4992 244.759 33.6477 244.661 28.0485C244.563 22.4094 248.001 17.7087 254.2 17.6005C260.439 17.4916 263.836 21.8729 263.926 26.9922C263.935 27.5121 263.906 28.1527 263.872 28.5133L248.474 28.7821C248.861 32.5759 251.386 35.1323 254.905 35.0708C257.865 35.0192 259.762 33.7059 260.282 31.4164ZM254.255 20.72C251.095 20.7751 249.086 22.5705 248.545 25.9404L259.983 25.7408C259.689 22.6654 257.574 20.6621 254.255 20.72ZM279.603 37.6402L279.31 20.8427L275.19 20.9146L275.132 17.5552L279.251 17.4833L279.217 15.5236C279.148 11.5642 281.703 8.99916 285.743 8.92866L289.062 8.87071L289.121 12.2302L286.081 12.2833C284.242 12.3154 283.063 13.5761 283.098 15.5758L283.13 17.4155L289.209 17.3094L289.268 20.6689L283.189 20.775L283.482 37.5725L279.603 37.6402ZM309.963 16.9472L310.314 37.1041L306.435 37.1718L306.373 33.6124C305.337 36.1508 302.961 37.5525 299.962 37.6049C295.402 37.6845 292.385 34.4566 292.302 29.6573L292.085 17.2592L295.965 17.1915L296.168 28.8297C296.224 32.0293 298.141 34.1561 300.981 34.1066C304.14 34.0514 306.335 31.4527 306.274 27.9332L306.083 17.0149L309.963 16.9472ZM317.143 10.5009L321.022 10.4332L321.132 16.7522L327.091 16.6482L327.15 20.0077L321.191 20.1117L321.367 30.1902C321.405 32.3498 322.585 33.5294 324.545 33.4952L327.385 33.4456L327.443 36.8051L324.284 36.8603C320.204 36.9315 317.562 34.4972 317.49 30.3779L317.312 20.1794L313.192 20.2513L313.134 16.8918L317.253 16.8199L317.143 10.5009ZM348.082 16.2818L348.434 36.4387L344.554 36.5065L344.492 32.947C343.456 35.4855 341.08 36.8871 338.081 36.9395C333.521 37.0191 330.505 33.7912 330.421 28.992L330.204 16.5939L334.084 16.5261L334.287 28.1644C334.343 31.3639 336.26 33.4907 339.1 33.4412C342.259 33.386 344.454 30.7873 344.393 27.2679L344.202 16.3495L348.082 16.2818ZM364.789 19.3507L361.87 19.4016C358.19 19.4659 357.048 22.7663 357.125 27.1656L357.284 36.2843L353.404 36.352L353.053 16.195L356.932 16.1273L357 20.0067C357.873 17.3111 359.452 16.0833 362.291 16.0338L364.731 15.9912L364.789 19.3507ZM381.709 29.2969L385.588 29.2292C384.941 33.4011 381.349 36.1842 376.39 36.2708C370.151 36.3797 366.186 31.5282 366.088 25.929C365.989 20.2899 369.428 15.5892 375.627 15.481C381.866 15.3721 385.263 19.7534 385.352 24.8727C385.361 25.3926 385.333 26.0332 385.299 26.3938L369.901 26.6626C370.287 30.4564 372.812 33.0127 376.332 32.9513C379.292 32.8997 381.189 31.5863 381.709 29.2969ZM375.681 18.6005C372.522 18.6556 370.513 20.451 369.972 23.8209L381.41 23.6213C381.116 20.5459 379.001 18.5425 375.681 18.6005Z" fill="black"/>
<g clip-path="url(#clip0_0_1)">
<path d="M38.8995 0.835652L0.559326 1.50488L1.23655 40.3031L13.0416 50.2945L50.407 49.6423L49.7148 9.98666L38.8995 0.835652ZM7.24512 7.96128L36.6066 7.44877L43.1652 13.0145L43.6918 43.1805L15.3227 43.6757L7.75681 37.2758L7.24512 7.96128Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="49" height="49" fill="white" />
</clipPath>
</defs>
</svg>

        </div>
        <div className="text-white flex flex-col gap-8 ">
            <div className=" h-[6rem] bg-green relative rotate-[-1deg]  -translate-x-[40px] w-[110%] mx-auto">
        <svg  className="absolute top-[23px]  left-0" width="350" height="51" viewBox="0 0 386 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M83.348 41.3859C76.9489 41.4976 72.5647 37.8535 72.453 31.4545L72.1354 13.2573L76.1347 13.1875L76.4545 31.5047C76.5243 35.5041 79.2837 37.7363 83.2831 37.6664C87.3224 37.5959 90.0022 35.2688 89.9324 31.2694L89.6127 12.9522L93.6121 12.8824L93.9297 31.0796C94.0414 37.4787 89.787 41.2735 83.348 41.3859ZM98.9119 40.7942L98.5601 20.6372L102.439 20.5695L102.502 24.129C103.537 21.5905 105.913 20.1888 108.913 20.1365C113.472 20.0569 116.489 23.2847 116.573 28.084L116.789 40.4821L112.91 40.5498L112.707 28.9116C112.651 25.7121 110.733 23.5852 107.894 23.6348C104.734 23.6899 102.539 26.2886 102.601 29.8081L102.791 40.7264L98.9119 40.7942ZM121.96 40.3919L121.461 11.7962L125.34 11.7285L125.839 40.3241L121.96 40.3919ZM140.221 40.3931C134.182 40.4986 129.747 36.2153 129.642 30.1762C129.536 24.1372 133.819 19.7017 139.858 19.5963C145.898 19.4909 150.293 23.7748 150.398 29.8139C150.504 35.853 146.261 40.2877 140.221 40.3931ZM140.162 36.9937C143.962 36.9273 146.511 34.0024 146.439 29.883C146.367 25.7637 143.717 22.9295 139.918 22.9958C136.078 23.0628 133.529 25.9877 133.601 30.1071C133.673 34.2265 136.323 37.0607 140.162 36.9937ZM163.216 39.9918C156.857 40.1028 153.133 35.327 153.036 29.7679C152.939 24.2087 156.494 19.3059 162.853 19.1949C167.573 19.1126 171.701 21.8409 172.34 26.3905L168.461 26.4582C168.061 24.1848 165.712 22.5455 162.993 22.593C158.953 22.6635 157.008 25.818 157.076 29.6974C157.144 33.5768 159.238 36.6607 163.237 36.5909C165.997 36.5427 168.011 35.0673 168.611 32.7765L172.451 32.7095C171.885 36.96 168.336 39.9024 163.216 39.9918ZM190.122 39.2021L182.715 29.6899L180.235 32.0535L180.363 39.3724L176.444 39.4408L175.945 10.8452L179.864 10.7768L180.152 27.2543L188.77 19.0626L193.809 18.9746L185.468 27.0014L194.921 39.1183L190.122 39.2021ZM208.839 12.3913L212.718 12.3236L212.829 18.6427L218.788 18.5386L218.846 21.8981L212.887 22.0022L213.063 32.0806C213.101 34.2403 214.282 35.4199 216.241 35.3857L219.081 35.3361L219.14 38.6956L215.98 38.7507C211.901 38.8219 209.258 36.3877 209.186 32.2683L209.008 22.0699L204.888 22.1418L204.83 18.7823L208.949 18.7104L208.839 12.3913ZM223.155 38.6255L222.656 10.0298L226.536 9.96212L226.745 21.9603C227.781 19.4218 230.157 18.0201 233.156 17.9678C237.716 17.8882 240.733 21.116 240.816 25.9153L241.033 38.3134L237.153 38.3811L236.95 26.7429C236.894 23.5434 234.977 21.4165 232.137 21.4661C228.978 21.5213 226.783 24.12 226.844 27.6394L227.035 38.5578L223.155 38.6255ZM260.282 31.4164L264.162 31.3487C263.514 35.5206 259.922 38.3038 254.963 38.3903C248.724 38.4992 244.759 33.6477 244.661 28.0485C244.563 22.4094 248.001 17.7087 254.2 17.6005C260.439 17.4916 263.836 21.8729 263.926 26.9922C263.935 27.5121 263.906 28.1527 263.872 28.5133L248.474 28.7821C248.861 32.5759 251.386 35.1323 254.905 35.0708C257.865 35.0192 259.762 33.7059 260.282 31.4164ZM254.255 20.72C251.095 20.7751 249.086 22.5705 248.545 25.9404L259.983 25.7408C259.689 22.6654 257.574 20.6621 254.255 20.72ZM279.603 37.6402L279.31 20.8427L275.19 20.9146L275.132 17.5552L279.251 17.4833L279.217 15.5236C279.148 11.5642 281.703 8.99916 285.743 8.92866L289.062 8.87071L289.121 12.2302L286.081 12.2833C284.242 12.3154 283.063 13.5761 283.098 15.5758L283.13 17.4155L289.209 17.3094L289.268 20.6689L283.189 20.775L283.482 37.5725L279.603 37.6402ZM309.963 16.9472L310.314 37.1041L306.435 37.1718L306.373 33.6124C305.337 36.1508 302.961 37.5525 299.962 37.6049C295.402 37.6845 292.385 34.4566 292.302 29.6573L292.085 17.2592L295.965 17.1915L296.168 28.8297C296.224 32.0293 298.141 34.1561 300.981 34.1066C304.14 34.0514 306.335 31.4527 306.274 27.9332L306.083 17.0149L309.963 16.9472ZM317.143 10.5009L321.022 10.4332L321.132 16.7522L327.091 16.6482L327.15 20.0077L321.191 20.1117L321.367 30.1902C321.405 32.3498 322.585 33.5294 324.545 33.4952L327.385 33.4456L327.443 36.8051L324.284 36.8603C320.204 36.9315 317.562 34.4972 317.49 30.3779L317.312 20.1794L313.192 20.2513L313.134 16.8918L317.253 16.8199L317.143 10.5009ZM348.082 16.2818L348.434 36.4387L344.554 36.5065L344.492 32.947C343.456 35.4855 341.08 36.8871 338.081 36.9395C333.521 37.0191 330.505 33.7912 330.421 28.992L330.204 16.5939L334.084 16.5261L334.287 28.1644C334.343 31.3639 336.26 33.4907 339.1 33.4412C342.259 33.386 344.454 30.7873 344.393 27.2679L344.202 16.3495L348.082 16.2818ZM364.789 19.3507L361.87 19.4016C358.19 19.4659 357.048 22.7663 357.125 27.1656L357.284 36.2843L353.404 36.352L353.053 16.195L356.932 16.1273L357 20.0067C357.873 17.3111 359.452 16.0833 362.291 16.0338L364.731 15.9912L364.789 19.3507ZM381.709 29.2969L385.588 29.2292C384.941 33.4011 381.349 36.1842 376.39 36.2708C370.151 36.3797 366.186 31.5282 366.088 25.929C365.989 20.2899 369.428 15.5892 375.627 15.481C381.866 15.3721 385.263 19.7534 385.352 24.8727C385.361 25.3926 385.333 26.0332 385.299 26.3938L369.901 26.6626C370.287 30.4564 372.812 33.0127 376.332 32.9513C379.292 32.8997 381.189 31.5863 381.709 29.2969ZM375.681 18.6005C372.522 18.6556 370.513 20.451 369.972 23.8209L381.41 23.6213C381.116 20.5459 379.001 18.5425 375.681 18.6005Z" fill="black"/>
<g clip-path="url(#clip0_0_1)">
<path d="M38.8995 0.835652L0.559326 1.50488L1.23655 40.3031L13.0416 50.2945L50.407 49.6423L49.7148 9.98666L38.8995 0.835652ZM7.24512 7.96128L36.6066 7.44877L43.1652 13.0145L43.6918 43.1805L15.3227 43.6757L7.75681 37.2758L7.24512 7.96128Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="49" height="49" fill="white" />
</clipPath>
</defs>
</svg>
</div>
        </div>
        <div className=" h-[6rem] bg-red relative rotate-[0.5deg]  -translate-x-[40px] w-[110%] mx-auto">
        <svg className="absolute top-[23px]  left-0" width="350" height="51" viewBox="0 0 386 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M83.348 41.3859C76.9489 41.4976 72.5647 37.8535 72.453 31.4545L72.1354 13.2573L76.1347 13.1875L76.4545 31.5047C76.5243 35.5041 79.2837 37.7363 83.2831 37.6664C87.3224 37.5959 90.0022 35.2688 89.9324 31.2694L89.6127 12.9522L93.6121 12.8824L93.9297 31.0796C94.0414 37.4787 89.787 41.2735 83.348 41.3859ZM98.9119 40.7942L98.5601 20.6372L102.439 20.5695L102.502 24.129C103.537 21.5905 105.913 20.1888 108.913 20.1365C113.472 20.0569 116.489 23.2847 116.573 28.084L116.789 40.4821L112.91 40.5498L112.707 28.9116C112.651 25.7121 110.733 23.5852 107.894 23.6348C104.734 23.6899 102.539 26.2886 102.601 29.8081L102.791 40.7264L98.9119 40.7942ZM121.96 40.3919L121.461 11.7962L125.34 11.7285L125.839 40.3241L121.96 40.3919ZM140.221 40.3931C134.182 40.4986 129.747 36.2153 129.642 30.1762C129.536 24.1372 133.819 19.7017 139.858 19.5963C145.898 19.4909 150.293 23.7748 150.398 29.8139C150.504 35.853 146.261 40.2877 140.221 40.3931ZM140.162 36.9937C143.962 36.9273 146.511 34.0024 146.439 29.883C146.367 25.7637 143.717 22.9295 139.918 22.9958C136.078 23.0628 133.529 25.9877 133.601 30.1071C133.673 34.2265 136.323 37.0607 140.162 36.9937ZM163.216 39.9918C156.857 40.1028 153.133 35.327 153.036 29.7679C152.939 24.2087 156.494 19.3059 162.853 19.1949C167.573 19.1126 171.701 21.8409 172.34 26.3905L168.461 26.4582C168.061 24.1848 165.712 22.5455 162.993 22.593C158.953 22.6635 157.008 25.818 157.076 29.6974C157.144 33.5768 159.238 36.6607 163.237 36.5909C165.997 36.5427 168.011 35.0673 168.611 32.7765L172.451 32.7095C171.885 36.96 168.336 39.9024 163.216 39.9918ZM190.122 39.2021L182.715 29.6899L180.235 32.0535L180.363 39.3724L176.444 39.4408L175.945 10.8452L179.864 10.7768L180.152 27.2543L188.77 19.0626L193.809 18.9746L185.468 27.0014L194.921 39.1183L190.122 39.2021ZM208.839 12.3913L212.718 12.3236L212.829 18.6427L218.788 18.5386L218.846 21.8981L212.887 22.0022L213.063 32.0806C213.101 34.2403 214.282 35.4199 216.241 35.3857L219.081 35.3361L219.14 38.6956L215.98 38.7507C211.901 38.8219 209.258 36.3877 209.186 32.2683L209.008 22.0699L204.888 22.1418L204.83 18.7823L208.949 18.7104L208.839 12.3913ZM223.155 38.6255L222.656 10.0298L226.536 9.96212L226.745 21.9603C227.781 19.4218 230.157 18.0201 233.156 17.9678C237.716 17.8882 240.733 21.116 240.816 25.9153L241.033 38.3134L237.153 38.3811L236.95 26.7429C236.894 23.5434 234.977 21.4165 232.137 21.4661C228.978 21.5213 226.783 24.12 226.844 27.6394L227.035 38.5578L223.155 38.6255ZM260.282 31.4164L264.162 31.3487C263.514 35.5206 259.922 38.3038 254.963 38.3903C248.724 38.4992 244.759 33.6477 244.661 28.0485C244.563 22.4094 248.001 17.7087 254.2 17.6005C260.439 17.4916 263.836 21.8729 263.926 26.9922C263.935 27.5121 263.906 28.1527 263.872 28.5133L248.474 28.7821C248.861 32.5759 251.386 35.1323 254.905 35.0708C257.865 35.0192 259.762 33.7059 260.282 31.4164ZM254.255 20.72C251.095 20.7751 249.086 22.5705 248.545 25.9404L259.983 25.7408C259.689 22.6654 257.574 20.6621 254.255 20.72ZM279.603 37.6402L279.31 20.8427L275.19 20.9146L275.132 17.5552L279.251 17.4833L279.217 15.5236C279.148 11.5642 281.703 8.99916 285.743 8.92866L289.062 8.87071L289.121 12.2302L286.081 12.2833C284.242 12.3154 283.063 13.5761 283.098 15.5758L283.13 17.4155L289.209 17.3094L289.268 20.6689L283.189 20.775L283.482 37.5725L279.603 37.6402ZM309.963 16.9472L310.314 37.1041L306.435 37.1718L306.373 33.6124C305.337 36.1508 302.961 37.5525 299.962 37.6049C295.402 37.6845 292.385 34.4566 292.302 29.6573L292.085 17.2592L295.965 17.1915L296.168 28.8297C296.224 32.0293 298.141 34.1561 300.981 34.1066C304.14 34.0514 306.335 31.4527 306.274 27.9332L306.083 17.0149L309.963 16.9472ZM317.143 10.5009L321.022 10.4332L321.132 16.7522L327.091 16.6482L327.15 20.0077L321.191 20.1117L321.367 30.1902C321.405 32.3498 322.585 33.5294 324.545 33.4952L327.385 33.4456L327.443 36.8051L324.284 36.8603C320.204 36.9315 317.562 34.4972 317.49 30.3779L317.312 20.1794L313.192 20.2513L313.134 16.8918L317.253 16.8199L317.143 10.5009ZM348.082 16.2818L348.434 36.4387L344.554 36.5065L344.492 32.947C343.456 35.4855 341.08 36.8871 338.081 36.9395C333.521 37.0191 330.505 33.7912 330.421 28.992L330.204 16.5939L334.084 16.5261L334.287 28.1644C334.343 31.3639 336.26 33.4907 339.1 33.4412C342.259 33.386 344.454 30.7873 344.393 27.2679L344.202 16.3495L348.082 16.2818ZM364.789 19.3507L361.87 19.4016C358.19 19.4659 357.048 22.7663 357.125 27.1656L357.284 36.2843L353.404 36.352L353.053 16.195L356.932 16.1273L357 20.0067C357.873 17.3111 359.452 16.0833 362.291 16.0338L364.731 15.9912L364.789 19.3507ZM381.709 29.2969L385.588 29.2292C384.941 33.4011 381.349 36.1842 376.39 36.2708C370.151 36.3797 366.186 31.5282 366.088 25.929C365.989 20.2899 369.428 15.5892 375.627 15.481C381.866 15.3721 385.263 19.7534 385.352 24.8727C385.361 25.3926 385.333 26.0332 385.299 26.3938L369.901 26.6626C370.287 30.4564 372.812 33.0127 376.332 32.9513C379.292 32.8997 381.189 31.5863 381.709 29.2969ZM375.681 18.6005C372.522 18.6556 370.513 20.451 369.972 23.8209L381.41 23.6213C381.116 20.5459 379.001 18.5425 375.681 18.6005Z" fill="black"/>
<g clip-path="url(#clip0_0_1)">
<path d="M38.8995 0.835652L0.559326 1.50488L1.23655 40.3031L13.0416 50.2945L50.407 49.6423L49.7148 9.98666L38.8995 0.835652ZM7.24512 7.96128L36.6066 7.44877L43.1652 13.0145L43.6918 43.1805L15.3227 43.6757L7.75681 37.2758L7.24512 7.96128Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="49" height="49" fill="white" />
</clipPath>
</defs>
</svg>

        </div>
    </div>
  )
}

export default Strips