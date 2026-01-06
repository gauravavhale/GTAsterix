class Subject {

    constructor(){
        this.observers = [];
    }

    subscribe(observer){
        this.observers.push(observer);
    }
    unsubscribe(observer){
        this.observers = this.observers.filter( obs => obs !== observer)
    }
    notify(data){
        this.observers.forEach( obs => {
            obs.update(data)
        });
    }
}

class Observer {
    update(data){
        console.log(` Received Update `, data)
    }
}

const subject = new Subject();
const obs1 = new Observer()
subject.subscribe(obs1)

subject.notify('Event Triggered')

