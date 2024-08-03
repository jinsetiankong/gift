// 备用图片路径  
let currentImageLoading = false; // 用于防止在图片加载时重复触发点击事件  
let currentImageLoading2 = false;
const emperorImages = [
  "../img/皇帝1.jpg",
  "../img/皇帝2.jpg",
  "../img/皇帝3.jpg",
  "../img/皇帝4.jpg",
  "../img/皇帝5.jpg",
  "../img/皇帝6.jpg",
  "../img/皇帝7.jpg",
  "../img/皇帝8.jpg",
  "../img/皇帝9.jpg",
  "../img/皇帝10.jpg",
  "../img/皇帝11.jpg",
  "../img/皇帝12.jpg",
  "../img/皇帝13.jpg",
  "../img/皇帝14.jpg",
  "../img/皇帝15.jpg",
  "../img/皇帝16.jpg",
  "../img/皇帝17.jpg",
  "../img/皇帝18.jpg",
  "../img/皇帝19.jpg",
  "../img/皇帝20.jpg",
  // 可以添加更多备用图片，依次加数字
];

const courtierImages = [
  "../img/朝臣1.jpg",
  "../img/朝臣2.jpg",
  "../img/朝臣3.jpg",
  "../img/朝臣4.jpg",
  "../img/朝臣5.jpg",
  "../img/朝臣6.jpg",
  "../img/朝臣7.jpg",
  "../img/朝臣8.jpg",
  "../img/朝臣9.jpg",
  "../img/朝臣10.jpg",
  "../img/朝臣11.jpg",
  "../img/朝臣12.jpg",
  "../img/朝臣13.jpg",
  "../img/朝臣14.jpg",
  "../img/朝臣15.jpg",
  "../img/朝臣16.jpg",
  "../img/朝臣17.jpg",
  "../img/朝臣18.jpg",
  "../img/朝臣19.jpg",
  "../img/朝臣20.jpg",
  // 可以添加更多备用图片，依次加数字
];

// 获取图片和按钮元素  
const emperorImg = document.getElementById('emperorImg');
const courtierImg = document.getElementById('courtierImg');

// 初始化索引  
let emperorIndex = 0;
let courtierIndex = 0;

function loadNextEmperorImage() {
  if (currentImageLoading) return; // 如果已经在加载图片，则直接返回  

  const nextImageIndex = (emperorIndex + 1) % emperorImages.length;
  const nextImageUrl = emperorImages[nextImageIndex];

  // 如果下一个图片的URL为空或无效（这里假设我们提前过滤掉了无效URL，或者知道它们为空）  
  if (!nextImageUrl) {
    // 跳过此图片，直接尝试下一张  
    emperorIndex = nextImageIndex; // 更新索引，尽管我们在这里没有真的“跳过”，但逻辑上是这样处理的  
    loadNextEmperorImage(); // 递归调用以尝试下一张图片  
    return;
  }

  currentImageLoading = true; // 标记为正在加载  

  // 创建一个新的Image对象来检查URL  
  const img = new Image();
  img.onload = function () {
    // 图片加载成功  
    emperorImg.src = nextImageUrl; // 更新DOM中的图片  
    emperorIndex = nextImageIndex; // 更新索引  
    currentImageLoading = false; // 标记为加载完成  
  };
  img.onerror = function () {
    // 图片加载失败（可能是URL无效），跳过此图片  
    console.error(`Failed to load image: ${nextImageUrl}`);
    emperorIndex = nextImageIndex; // 更新索引以跳过当前无效的URL  
    loadNextEmperorImage(); // 递归调用以尝试下一张图片  
    currentImageLoading = false; // 标记为加载完成  
  };

  // 尝试加载图片  
  img.src = nextImageUrl;
}

function loadNextcourtierImages() {
  if (currentImageLoading) return; // 如果已经在加载图片，则直接返回  

  const nextImageIndex = (courtierIndex + 1) % courtierImages.length;
  const nextImageUrl = courtierImages[nextImageIndex];

  // 如果下一个图片的URL为空或无效（这里假设我们提前过滤掉了无效URL，或者知道它们为空）  
  if (!nextImageUrl) {
    // 跳过此图片，直接尝试下一张  
    courtierIndex = nextImageIndex; // 更新索引，尽管我们在这里没有真的“跳过”，但逻辑上是这样处理的  
    loadNextcourtierImages(); // 递归调用以尝试下一张图片  
    return;
  }

  currentImageLoading2 = true; // 标记为正在加载  

  // 创建一个新的Image对象来检查URL  
  const img = new Image();
  img.onload = function () {
    // 图片加载成功  
    courtierImg.src = nextImageUrl; // 更新DOM中的图片  
    courtierIndex = nextImageIndex; // 更新索引  
    currentImageLoading = false; // 标记为加载完成  
  };
  img.onerror = function () {
    // 图片加载失败（可能是URL无效），跳过此图片  
    console.error(`Failed to load image: ${nextImageUrl}`);
    courtierIndex = nextImageIndex; // 更新索引以跳过当前无效的URL  
    loadNextcourtierImages(); // 递归调用以尝试下一张图片  
    currentImageLoading = false; // 标记为加载完成  
  };

  // 尝试加载图片  
  img.src = nextImageUrl;
}

const emperorBtn = document.getElementById('emperorBtn'); // 假设你有一个按钮，其ID为'your-button-id'  
emperorBtn.addEventListener('click', loadNextEmperorImage);

const courtierBtn = document.getElementById('courtierBtn'); // 假设你有一个按钮，其ID为'your-button-id'  
courtierBtn.addEventListener('click', loadNextcourtierImages);