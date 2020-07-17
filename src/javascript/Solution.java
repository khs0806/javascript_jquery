package javascript;

class Solution {
    public int[] solution(int[][] v) {
        int[] answer = {};
        int x = 0;
        int y = 0;
        
        if (v[0][0] == v[1][0]){
            x = v[2][0];
        } else if (v[1][0] == v[2][0]){
            x = v[0][0];
        } else {
            x = v[1][0];
        }
        
        if (v[0][1] == v[1][1]){
            y = v[2][1];
        } else if (v[1][1] == v[2][1]){
            y = v[0][1];
        } else {
            y = v[1][1];
        }
        
        answer = new int[]{x, y};
        
        return answer;
    }
}
