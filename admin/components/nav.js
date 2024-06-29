const nav = () => {
  return `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="../components/nav.css">

  <form id="forSearch">
  <nav id="main">
  <input type="checkbox" id="check">
  <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
  </label>
  <label class="logo">DesignX</label>
  
  <ul>
        <li><a class="active" href="../html/category.html">category</a></li>
        <li><a class="active" href="../html/add.html">Add</a></li>
        <li><a href="#">Show</a></li>
        <li><a href="#">Sign in</a></li>
  </ul>
  </form>
</nav>
`;
};

export default nav;
