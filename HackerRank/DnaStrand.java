public class DnaStrand {

    public static char compliment(char n) {
        if (n == 'A')
            return 'T';
        else if (n == 'T')
            return 'A';
        else if (n == 'G')
            return 'C';
        else if (n == 'C')
            return 'G';
        else
            return 'N';
    }

    public static String makeComplement(String dna) {
        // Your code
        String comp = "";
        for (int i = 0; i < dna.length(); i++)
            comp += DnaStrand.compliment(dna.charAt(i));
        return comp;
    }
}