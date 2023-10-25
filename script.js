function toggleContent(id) {
    // 获取相应的内容部分
    const contentElement = document.getElementById('content-' + id);

    // 判断内容部分当前是否正在显示
    if(contentElement.style.display === 'none' || contentElement.style.display === '') {
        contentElement.style.display = 'block';
        contentElement.classList.add('show');
    } else {
        contentElement.style.display = 'none';
    }
}

function showContent(id) {
    const sections = document.querySelectorAll('.content-section');
    for (let section of sections) {
        section.style.display = 'none'; // 隐藏所有内容块
    }
    document.getElementById(id).style.display = 'block'; // 显示被点击的内容块
}

document.addEventListener('DOMContentLoaded', function() { // 当文档加载完成时
    const aboutAsceLink = document.getElementById('about-asce-link');
    
    aboutAsceLink.addEventListener('click', function() {
        showContent('about-asce');
    });
});
