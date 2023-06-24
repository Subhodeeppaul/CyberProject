import java.awt.*;

import javax.swing.JFrame;

 public class First{

	public static void main(String a[]) {
		Frame f = new Frame();
        
		Button b1 = new Button("User");
		b1.setBounds(100, 50, 50, 50);
		f.add(b1);
		Button b2 = new Button("Admin");
		b2.setBounds(100, 101, 50, 50);
		f.add(b2);
		
		f.setSize(500, 500);
		f.setLayout(null);
		f.setVisible(true);
        //f.setDefaultCloseOperation(f.EXIT_ON_CLOSE);
        
      
	}
}
