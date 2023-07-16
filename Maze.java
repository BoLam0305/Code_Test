package alex_code_test;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args){
        Maze maze = new Maze(20, 5, 7);
        maze.getMaze();
        List<Maze.Action> actions = maze.possibleActions(6,7);
    }
}

class Maze{
    int size;
    Player player;
    Exit exit;
    enum Action{
        Exit, MoveNorth, MoveEast, MoveSouth, MoveWest;
    }

    public Maze(int size, int start_x, int start_y) {
        this.size = size;
        this.player = new Player(start_x, start_y);
        this.exit = new Exit(size);
    }

    public void getMaze(){
        for (int i = 0; i<=this.size; i++){
            for (int j=0; j<this.size; j++){
                System.out.print(" . ");
            }
            System.out.println();
        }
    }

    public List<Maze.Action> possibleActions(int go_x, int go_y){
        List<Maze.Action> actionList = new ArrayList<>();
        int temp_x = go_x - this.player.current_x;
        int temp_y = go_y - this.player.current_y;

        if (temp_x > 0 && temp_y == 0){
            actionList.add(Action.MoveSouth);
        }
        else if (temp_x < 0 && temp_y == 0){
            actionList.add(Action.MoveNorth);
        }
        else if (temp_x ==0 && temp_y > 0){
            actionList.add(Action.MoveEast);
        }
        else if (temp_x == 0 && temp_y < 0){
            actionList.add(Action.MoveWest);
        }


        this.player.setCurrent_x(go_x);
        this.player.setCurrent_y(go_y);

        if (this.player.isoOnExit(this.exit)){
            actionList.add(Action.Exit);
            this.player.setWin(true);
        }

        /**
         * check an other condiction.......
         */

        return actionList;
    }

}

class Player{
    int current_x;
    int current_y;
    boolean isWin;
    public Player(int current_x, int current_y) {
        this.current_x = current_x;
        this.current_y = current_y;
        this.isWin = false;
    }

    public void setWin(boolean win) {
        isWin = win;
    }

    public void setCurrent_x(int current_x) {
        this.current_x = current_x;
    }


    public void setCurrent_y(int current_y) {
        this.current_y = current_y;
    }

    public boolean isoOnExit(Exit exit) {
        if (this.current_y == exit.exit_x && this.current_y == exit.exit_y){
            return true;
        }else{
            return false;
        }
    }
}

class Exit{
    int exit_x;
    int exit_y;

    public Exit(int size) {
        this.exit_x =  (int) (Math.random()* size);
        this.exit_y =  (int) (Math.random()* size);
    }
}
