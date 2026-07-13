body{
    margin:0;
    height:100vh;

    display:flex;
    justify-content:center;
    align-items:center;

    text-align:center;

    color:white;

    font-family:Arial, sans-serif;

    background:linear-gradient(
    to bottom,
    #081229,
    #17396b,
    #4d78c7);

    overflow:hidden;
}

.overlay{

    background:rgba(0,0,0,.25);

    padding:50px;

    border-radius:30px;

    backdrop-filter:blur(8px);

    width:80%;
    max-width:700px;
}

h1{

    color:#ffd6e8;

    font-size:55px;

    margin-bottom:10px;
}

h2{

    color:#cde8ff;

    margin-bottom:30px;
}

#countdown{

    font-size:40px;

    color:#fff4b2;

    margin:30px 0;

    font-weight:bold;
}

p{

    line-height:1.8;

    font-size:20px;
}

button{

    margin-top:30px;

    background:#ffd6e8;

    color:#17396b;

    border:none;

    border-radius:40px;

    padding:18px 40px;

    font-size:18px;

    cursor:pointer;

    transition:.3s;
}

button:hover{

    transform:scale(1.08);
}
