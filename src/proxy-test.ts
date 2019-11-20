const environement :string ="TMS";
interface ITag{
    btn1Tag(id:string):void;
    btn2Tag(id:string): void;
}

class TagAdobe implements ITag {
    private urlAdobe = "http://adobeTag";
    btn1Tag(id:string):void {
        console.log("TagAdobe btn1Tag ", id , "biblio: ", this.urlAdobe ) ;
    }
    btn2Tag(id:string): void{
        console.log("TagAdobe btn2Tag " ,id ,  "biblio: ", this.urlAdobe );
    }
}

class TagTms implements ITag {
    private urlTms:string ="http://tmsTag";
    btn1Tag(id:string):void {
        console.log("TagTms btn1Tag " ,id ,  "biblio: ", this.urlTms );
    }
    btn2Tag(id:string): void{
        console.log("TagTms btn2Tag " , id ,  "biblio: ", this.urlTms);
    }
}

class TagProxy implements ITag {
    private tagTms: TagTms = new TagTms(); 
    private tagAdobe: TagAdobe = new TagAdobe();

    btn1Tag(id:string):void {
        // if la biblo utilise une 
        if(environement==="TMS"){
            this.tagTms.btn1Tag(id);
        }else{
            this.tagAdobe.btn1Tag(id);
        }        
    }
    btn2Tag(id:string): void{
        this.tagTms.btn1Tag(id);
    }
}

class App {
    private tag:ITag = new TagProxy();

    public test():void{
        this.tag.btn1Tag('11111');
    }
}

let app = new App();
app.test();
console.log("---- fin de taggage");