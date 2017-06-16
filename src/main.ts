if (typeof window === 'undefined') {
    // Running on node env.
    console.log('It works!');
} else {
    // Web
    document.getElementsByName('body').item(0).innerText = 'It works!';
}
