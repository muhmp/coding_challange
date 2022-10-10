public static int solve3(List<String> list) {
    int count = 0;
    for (String s : list) {
        if (s.equals("../"))
            count--;
        else if (s.equals("./"))
            continue;
        else
            count++;
    }
    return count;
}