export class SearchModel {
    //step1:
    public ruleName: string;
    public discipline: number;
    public activeMode: number;
    public triggerOn: number;
    public patientType: number;

    //step2:
    public patienType: number;
    public gender: number;
    public mrn: string;
    public patientName: string;
    public reqLocation: string;

    //step3:
    public testCode: Array<any>;

    public ageFrom: number;
    public ageTo: number;
    public links: Array<any>;
    public priority: number;
    public ruleDesc: string;


    constructor() {
        this.ruleName = "";
        this.discipline = -1;
        this.activeMode = -1;
        this.triggerOn = -1;
        this.patientType = -1;

        this.patienType = -1;
        this.gender = -1;
        this.mrn = "";
        this.patientName = "";
        this.reqLocation = "";

        this.testCode=[];
    }
}