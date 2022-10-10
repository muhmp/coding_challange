/**
 * lottery with n coupons and n people take part of it
 * Each person 
 */

 function Long.sum(): Long {
    var sum = 0L
    for(ch in toString())
        sum += ch.toString().toLong()
    return sum
}

function waysToChooseSum(a: Long, b: Long): Array<Long> {
    val sums = HashMap<Long, Long>()
    var variants = 0L
    var maxPeople = 1L

    for(i in a..b) {
        val sum = i.sum()
        if(!sums.containsKey(sum))
            sums[sum] = 1
        else {
            sums[sum] = sums[sum]!!.plus(1)
            if(sums[sum]!! > maxPeople) {
                variants = 0
                maxPeople = sums[sum]!!
            }
        }

        if(sums[sum]!! == maxPeople)
            variants++

    }

    return arrayOf(variants, maxPeople)
}