package javaBasicPrograms;

public class Fibo {
   public static  void main(String[]args){
     printFibonacci(10);
     
   }
   // function to print the fibonacci numbers 

    public static void printFibonacci(int n){
         int  a=0;
         int  b=1;
        for(int i=1;i<=n;i++){
           System.out.println(a);
             int c=a+b;
              a=b;
              b=c;
           
        }
    }
}
