package javaBasicPrograms;

public class Prime {
   public static void main(String[]args){
     
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
  
}