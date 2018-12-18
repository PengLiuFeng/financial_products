export class Xzyszkmx{
    constructor(
      public ID_TYPE :object[], //融资方证件类型
      public ID_NO :string,     //融资方证件号码
      public CIF_NAME:string,   //客户名称
      public BUS_NAME:string,     //买方名称
      public BUS_COUNA:string,     //基础交易合同名称
      public BUS_COUN:string,     //基础交易合同编号
      public BUS_TYPE:object[],  //发票类型
      public BUS_NO:string,     //发票号码
      //public BUS_NO:string,     //发票票面金额
      public BUS_RECEI:string,     //应收账款金额
      //public BUS_NO:string,     //发票日期
      public END_DATE:string,     //应收账款到期日
      public BR_NO:string,     //登记单位
      public BR_NAME:string,     //登记单位名称
      public OP_NAME:string,     //登记人名称
      public updateOP_NAME:string,     //修改人名称
      public TX_DATE:string,     //登记时间
      public UP_DATE:string,     //修改时间
    ){}
    
    }