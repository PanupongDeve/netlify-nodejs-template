class TemplateAdaper {


    constructor() {

    }
}

const getInstance = () => {
    let instance = null;
    if (instance === null) {
        instance = new TemplateAdaper();
    }

    return instance;
}



module.exports = {
    templateAdaper: getInstance()
}