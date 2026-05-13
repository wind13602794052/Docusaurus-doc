// 全局样式：创建提示框样式（只加载一次）
const style = document.createElement('style');
style.textContent = `
  .copy-tip {
    position: fixed;
    background: #1890ff;
    color: #fff;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 12px;
    z-index: 9999;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
  }
`;
document.head.appendChild(style);

// 创建全局提示框
const tip = document.createElement('div');
tip.className = 'copy-tip';
document.body.appendChild(tip);

// 显示提示
function showTip(text, x, y) {
  tip.textContent = text;
  tip.style.left = x + 'px';
  tip.style.top = y + 'px';
  tip.style.opacity = 1;
  setTimeout(() => tip.style.opacity = 0, 1000);
}

// 等待 code 标签渲染完成并绑定单击复制
function waitForCodes() {
  const codes = document.querySelectorAll('code');

  if (codes.length > 0) {
    codes.forEach(el => {
      el.style.cursor = 'pointer';
      
      // 单击复制
      el.onclick = function (e) {
        try {
          const text = el.innerText.trim();
          navigator.clipboard.writeText(text);
          
          // 在鼠标位置显示提示
          showTip('复制成功', e.pageX + 10, e.pageY - 10);
        } catch (err) {}
      };
    });
  } else {
    setTimeout(waitForCodes, 100);
  }
}

// 页面加载完成后开始执行
window.addEventListener('load', () => {
  waitForCodes();
});