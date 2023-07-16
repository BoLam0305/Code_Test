public class Main {
    public static void main(String[] args) throws InterruptedException {
        int i = 0;
        while (true)
        {
            int first = 0;
            int second = 0;
            int third = 1;
            for (int j = 0; j <= i; j++) {
                int next = first + second + third;
                System.out.print(next);
                first = second;
                second = third;
                third = next;
            }
            i+=1;
            System.out.println();
            sleep(1000);
        }
    }
}