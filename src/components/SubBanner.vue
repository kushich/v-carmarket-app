<template>
<div class="sub-banner">
		<div class="subbanner-item">
			<div class="subbanner-content container">
				<h1>Car List</h1>
				<ol class="breadcrumb">
    			<li class="breadcrumb-item"><a href="/">Home</a></li>
    			<li class="breadcrumb-item active">Cars</li>
  			</ol>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.subbanner-item {
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  background: url('../assets/bg-2.jpg') no-repeat center;
  background-size: cover;
  background-position: bottom;
}
.subbanner-item:before {
  content: "";
  position:absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
}
.subbanner-content {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  color: #fff;
  user-select: none;
}
.subbanner-content h1 {
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
}

// 

.breadcrumb {
  background: none;
}
.breadcrumb-item a {
  color: #fff;
  text-decoration: none;
}
.breadcrumb-item.active {
  color: #ff5200;
}
</style>