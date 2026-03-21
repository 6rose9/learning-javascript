console.log('Worker loaded');

// console.log(window); ERROR: worker don't know window

onmessage = (event) => {
    // console.log(event);
    console.log('Message received in worker:', event.data.value);
    delay(2000);
    postMessage({
        result: event.data.value * 2
    });
}

function delay(ms){
    const start = new Date();
    while((new Date - start) < ms){
        console.log('Waiting...');
    }
}