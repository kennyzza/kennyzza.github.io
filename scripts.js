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
    const links = document.querySelectorAll('.sidebar li'); // 获取所有的链接

    for (let section of sections) {
        section.style.display = 'none'; // 隐藏所有内容块
    }
    
    for (let link of links) {
        link.classList.remove('active'); // 移除所有链接的下划线
    }

    // 这里是一个额外的判断，确保我们尝试显示存在的内容块
    if (document.getElementById(id)) {
        document.getElementById(id).style.display = 'block'; // 显示被点击的内容块
    }
    if (document.getElementById(id + '-link')) {
        document.getElementById(id + '-link').classList.add('active'); // 为被点击的链接添加下划线
    }
}



