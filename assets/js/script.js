const colorear = (iden, color = 'green') =>  {
    select = document.getElementById(iden);
    select.style.backgroundColor = 'green';
    select.onclick = () => {
        select.style.backgroundColor = color;
        };
    }
colorear('ele1', 'yellow');