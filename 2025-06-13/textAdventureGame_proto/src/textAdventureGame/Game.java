package textAdventureGame;

import java.util.Scanner;

public class Game {

	Scanner myScanner= new Scanner(System.in);
	Scanner enterScanner= new Scanner(System.in);
	String playerName;
	String playerWeapon;
	int playerHP;
	int choice;

	public static void main(String[] args) {
		Game game;
		game = new Game();
		game.playerSetUp();
		game.townGate();
	}

	public void playerSetUp() {
		playerHP = 15;
		playerWeapon = "Knife";
		System.out.println("Your HP: " + playerHP);
		System.out.println("Your Weapon: " + playerWeapon);
		System.out.println("Please Enter your name: ");
		playerName = myScanner.nextLine();
		System.out.println("Hello " + playerName + ", let's start your adventure!");
	}

	public void townGate() {
		System.out.println("");
		System.out.println("==================================================");
		System.out.println("\n");
		System.out.println("You are at the gate of the town.");
		System.out.println("A guard is standing in front of you.");
		System.out.println("What do you want to do.");
		System.out.println("");
		System.out.println("1. Talk to the guard.");
		System.out.println("2. Attack the guard.");
		System.out.println("3. Leave.");
		System.out.println("==================================================");
//		Scanner myScanner2;
		choice = myScanner.nextInt();
		
		if(choice==1) {
			System.out.println("Guard: Hello there, stranger. So your name is "+playerName+"? \nSorry but we cannot let stranger enter out town.");
			townGate();
			enterScanner.nextLine();
		}
		if(choice==2) {
			playerHP = playerHP-1;
			System.out.println("Guard: What the!? \nThe guard hit you so hard and you gave up. \n(You received 1 damage)");
			System.out.println("Your HP: "+playerHP);
			enterScanner.nextLine();
			townGate();
		}
		if(choice==3) {
			System.out.println("Guard: Bye.");
		}
		
	}
	

}
