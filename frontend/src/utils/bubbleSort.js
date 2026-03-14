export function bubbleSortSteps(array) {
    const arr = [...array]
    const steps = []

    steps.push({
        description: 'Dizi başlangıç hali',
        array: [...arr],
        highlight: []
    })

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            steps.push({
                description: `${arr[j]} ve ${arr[j + 1]} karşılaştırılıyor`,
                array: [...arr],
                highlight: [j, j + 1]
            })

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                steps.push({
                    description: `${arr[j]} ve ${arr[j + 1]} yer değiştiriyor`,
                    array: [...arr],
                    highlight: [j, j + 1]
                })
            }
        }
    }

    steps.push({
        description: 'Sıralama tamamlandı',
        array: [...arr],
        highlight: []
    })

    return steps
}
