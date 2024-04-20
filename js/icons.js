$(function () {

    let social__icons = $('#social__icons'),
        svg__icons = `
        <svg style="display: none;">

        <symbol id="facebook" viewBox="0 0 9.645 19.29">
            <g>
                <path id="iconmonstr-facebook-1"
                    d="M8.411,6.43H6V9.645H8.411V19.29H12.43V9.645h2.927l.288-3.215H12.43V5.09c0-.768.154-1.071.9-1.071h2.319V0H12.584C9.694,0,8.411,1.272,8.411,3.709Z"
                    transform="translate(-6)" />
            </g>>
        </symbol>

        <symbol id="twitter" viewBox="0 0 19.29 15.676">
            <g>
                <path id="iconmonstr-twitter-1"
                    d="M19.29,4.1a7.9,7.9,0,0,1-2.273.623,3.964,3.964,0,0,0,1.74-2.189,7.928,7.928,0,0,1-2.513.96A3.96,3.96,0,0,0,9.5,7.107,11.235,11.235,0,0,1,1.343,2.972,3.963,3.963,0,0,0,2.567,8.256a3.941,3.941,0,0,1-1.792-.5,3.96,3.96,0,0,0,3.174,3.93,3.967,3.967,0,0,1-1.788.068,3.96,3.96,0,0,0,3.7,2.748A7.957,7.957,0,0,1,0,16.146a11.2,11.2,0,0,0,6.067,1.778A11.192,11.192,0,0,0,17.315,6.153,8.057,8.057,0,0,0,19.29,4.1Z"
                    transform="translate(0 -2.248)" />
            </g>
        </symbol>

        <symbol id="instagram" viewBox="0 0 20 20">
            <g>
                <path id="iconmonstr-instagram-11"
                    d="M9.645,1.739c2.575,0,2.881.01,3.9.056,2.614.119,3.835,1.359,3.954,3.954.047,1.017.055,1.322.055,3.9s-.01,2.881-.055,3.9c-.12,2.592-1.337,3.835-3.954,3.954-1.018.047-1.321.056-3.9.056s-2.881-.01-3.9-.056c-2.62-.12-3.835-1.366-3.954-3.954-.047-1.017-.056-1.321-.056-3.9s.01-2.88.056-3.9c.12-2.594,1.337-3.835,3.954-3.954,1.018-.046,1.322-.055,3.9-.055ZM9.645,0C7.026,0,6.7.011,5.669.058c-3.5.161-5.449,2.1-5.61,5.61C.011,6.7,0,7.026,0,9.645s.011,2.948.058,3.977c.161,3.5,2.1,5.449,5.61,5.61,1.03.047,1.358.058,3.977.058s2.948-.011,3.977-.058c3.5-.161,5.451-2.1,5.609-5.61.047-1.029.059-1.358.059-3.977s-.011-2.947-.058-3.976c-.158-3.5-2.1-5.449-5.609-5.61C12.593.011,12.264,0,9.645,0Zm0,4.692A4.953,4.953,0,1,0,14.6,9.645,4.953,4.953,0,0,0,9.645,4.692Zm0,8.168A3.215,3.215,0,1,1,12.86,9.645,3.215,3.215,0,0,1,9.645,12.86Zm5.149-9.52A1.157,1.157,0,1,0,15.95,4.5,1.158,1.158,0,0,0,14.794,3.34Z" />
            </g>
        </symbol>

        <symbol id="linkedin" viewBox="0 0 17.935 17.097">
            <g>
                <path id="iconmonstr-linkedin-1"
                    d="M4,3.009A1.993,1.993,0,1,1,2.009,1,2,2,0,0,1,4,3.009Zm.016,3.617H0v12.86H4.019Zm6.415,0H6.441v12.86h3.994V12.735c0-3.753,4.846-4.061,4.846,0v6.751H19.29V11.343c0-6.334-7.171-6.1-8.856-2.985V6.626Z"
                    transform="translate(0 -1)" />
            </g>
        </symbol>

    </svg>`;


    let span__clip = $('#clip'),
        span_home__clip = $('#clip__home'),
        clip__icon = `
        <svg width="18.216" height="14.029" viewBox="0 0 18.216 14.029">
            <defs>
                <linearGradient id="gradient">
                    <stop offset="0%" stop-color="#0092FF" />
                    <stop offset="100%" stop-color="#00AE80" />
                </linearGradient>
            </defs>

            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_239)">
                <rect id="Rectangle_239-2" data-name="Rectangle 239" width="18.216" height="14.029" fill="#404040 "/>
            </g>
            <g>
                <path id="clip__color" d="M14.191,36.861a4.352,4.352,0,0,0-6.157,0L.977,43.835a3.386,3.386,0,1,0,4.788,4.789l7.058-6.975A2.419,2.419,0,0,0,9.4,38.229L4.1,43.535a.484.484,0,1,0,.684.684l5.306-5.306a1.451,1.451,0,1,1,2.052,2.053L5.081,47.94a2.418,2.418,0,0,1-3.42-3.42L8.65,37.613A3.386,3.386,0,0,1,13.439,42.4L8.2,47.64a.484.484,0,0,0,.684.684l5.305-5.306A4.352,4.352,0,0,0,14.191,36.861Z" transform="translate(1.381 -35.585)" fill="#404040 "/>
            </g>
      </svg>`;


    let span__pagination__prev = $('.arrow__prev'),
        arrow__prev = `
        <svg width="32.361" height="11.297" viewBox="0 0 32.361 11.297">
        <defs>
            <linearGradient id="arrow" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stop-color="#0092FF" />
                <stop offset="100%" stop-color="#00AE80" />
            </linearGradient>
        </defs>
        <g id="Group_1523" data-name="Group 1523" transform="translate(1.979 0.863)">
            <path  id="Line_88" data-name="Line 88" transform="translate(0.489 4.983)" stroke-width="2" d="M 29.894 0.1 L 0 0" class="line" stroke-width="2"></path>
            <path id="Path_1263" data-name="Path 1263" d="M-17079.037,1983.125l-8.168,4.786,8.168,4.786" transform="translate(17087.205 -1983.125)" stroke-width="2"/>
            </g>
        </svg>`;

    let span__pagination__next = $('.arrow__next'),
        arrow__next = `
        <svg width="32.361" height="11.297" viewBox="0 0 32.361 11.297">
        <defs>
            <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stop-color="#0092FF" />
                <stop offset="100%" stop-color="#00AE80" />
            </linearGradient>
        </defs>
        <g id="Group_1522" data-name="Group 1522" transform="translate(0 0.863)">
            <path  id="Line_88" data-name="Line 88" transform="translate(0 4.983)" stroke-width="2" d="M 29.894 0.1 L 0 0" class="line" stroke-width="2"></path>
            <path id="Path_1263" data-name="Path 1263" d="M-17087.205,1983.125l8.168,4.786-8.168,4.786" transform="translate(17109.42 -1983.125)" stroke-width="2"/>
        </g>
        </svg>`;

    let span__arrow = $('.arrow'),
        arrow__icon = ` 
        <svg width="30.707" height="8.359" viewBox="0 0 30.707 8.359">
            <defs>
                <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stop-color="#0092FF" />
                    <stop offset="100%" stop-color="#00AE80" />
                </linearGradient>
            </defs>
            <g data-name="Group 1009" transform="translate(14630.5 -1306.05)">
                <path  id="Line_79" data-name="Line 79" transform="translate(-14630.5 1310.267)" d="M 28.882 0.1 L 0 0" class="line" stroke-width="1"></path>
                <path id="Path_802" data-name="Path 802" d="M-14595.613,1298.32l7.66,3.73-7.66,3.73" transform="translate(-12.982 8.18)" stroke-width="1"/>
            </g>
        </svg>`;

    social__icons.html(svg__icons);

    span__clip.html(clip__icon);
    span_home__clip.html(clip__icon);

    span__pagination__prev.html(arrow__prev);
    span__pagination__next.html(arrow__next);

    span__arrow.html(arrow__icon);

});