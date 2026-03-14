export function quickSortSteps(array) {
    const arr = [...array]
    const steps = []

    steps.push({
        description: 'Dizi başlangıç hali',
        array: [...arr],
        highlight: []
    })

    function partition(arr, low, high) {
        const pivot = arr[high]
        steps.push({
            description: `Pivot seçildi: ${pivot}`,
            array: [...arr],
            highlight: [high]
        })

        let i = low - 1

        for (let j = low; j < high; j++) {
            steps.push({
                description: `${arr[j]} ve pivot ${pivot} karşılaştırılıyor`,
                array: [...arr],
                highlight: [j, high]
            })

            if (arr[j] <= pivot) {
                i++
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp

                if (i !== j) {
                    steps.push({
                        description: `${arr[i]} ve ${arr[j]} yer değiştiriyor`,
                        array: [...arr],
                        highlight: [i, j]
                    })
                }
            }
        }

        let temp = arr[i + 1]
        arr[i + 1] = arr[high]
        arr[high] = temp

        steps.push({
            description: `Pivot ${pivot} doğru konuma yerleşti`,
            array: [...arr],
            highlight: [i + 1]
        })

        return i + 1
    }

    function quickSort(arr, low, high) {
        if (low < high) {
            const pi = partition(arr, low, high)
            quickSort(arr, low, pi - 1)
            quickSort(arr, pi + 1, high)
        }
    }

    quickSort(arr, 0, arr.length - 1)

    steps.push({
        description: 'Sıralama tamamlandı',
        array: [...arr],
        highlight: []
    })

    return steps
}