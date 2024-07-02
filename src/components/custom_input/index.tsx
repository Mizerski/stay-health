import { useState } from "react";
import { TextInput, Text, View, Platform, TouchableOpacity } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';



import { styles } from "./styles";
import { CustomInputProps } from "./customInput";
import { themes } from "@/themes/index";

export function CustomInput({ title, isDataInput, isHourInput, onChangeText, value, ...rest }: CustomInputProps) {


    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (
        _event: DateTimePickerEvent,
        selectedDate?: Date
    ) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        if (selectedDate) {
            const formattedDate = isDataInput ? selectedDate.toLocaleDateString() : selectedDate.toLocaleTimeString();
            onChangeText(formattedDate);
        }
    };

    const formatDate = (date: Date) => {
        return isDataInput ? date.toLocaleDateString() : date.toLocaleTimeString();
    };

    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                {title}
            </Text>
            {isDataInput || isHourInput ? (
                <View>
                    <TouchableOpacity onPress={() => setShow(true)} style={styles.input}>
                        <TextInput
                            editable={false}
                            cursorColor={themes.colors.gray_3}
                            value={formatDate(date)}
                            {...rest}
                        />
                    </TouchableOpacity>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={isDataInput ? "date" : "time"}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
            ) : (
                <TextInput
                    style={styles.input}
                    cursorColor={themes.colors.gray_3}
                    onChangeText={onChangeText}
                    value={value}
                    {...rest}
                />
            )}
        </View>
    )
}