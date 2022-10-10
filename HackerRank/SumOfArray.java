import java.util.List;

public class SumOfArray {
    public int solve4(List<Integer> nums) {
        int min = Integer.MAX_VALUE;
        for (int i : nums)
            min = Math.min(min, i);
        int answer = 0;
        for (int i : nums)
            answer += i - min;
        return answer;
    }
}
