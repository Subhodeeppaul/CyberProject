import java.awt.*;
import javax.swing.*;
public class Second{
    public static void main(String [] args){
        Frame jf= new Frame();
        Button b=new Button("Booking");
        b.setBounds(100, 50, 50, 50);
        jf.add(b);
        Button b1=new Button("Parking");
        b1.setBounds(100, 101, 50, 50);
        jf.add(b1);
        jf.setSize(500, 500);
		jf.setLayout(null);
		jf.setVisible(true);

    }
}

