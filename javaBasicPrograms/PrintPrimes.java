package javaBasicPrograms;

public class PrintPrimes {
   public static  void main(String[]args){
       printPrimes(100);
     
   }
   public static boolean isPrime(int n){
     if(n<=1){
        return false;
     }
     for(int i=2;i*i<=n;i++){
       if(n%i==0){
         return false;
       }
     }

     return true;
     
   }
   public static  void printPrimes(int n){
     for(int i=2;i<=n;i++){
         if(isPrime(i)){
            System.out.print(i+",");
         }
     }

   }
  
}
  