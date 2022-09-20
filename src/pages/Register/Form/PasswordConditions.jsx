import { List, ListItemIcon, ListItem, ListItemText } from "@mui/material"

const PasswordConditions = ({ passwordConditions }) => {
    const { tenCharacters, oneUpperCase, oneLowerCase, oneNumeric, oneSpecialCharacter } = passwordConditions

    const conditions = ["at least 10 characters", "1 upper case letter", "1 lower case letter", "1 numeric character", "1 special character !@#$%^&*"]
    const conditionStates = [tenCharacters, oneUpperCase, oneLowerCase, oneNumeric, oneSpecialCharacter];

    const check = String.fromCharCode(10003)
    const cross = String.fromCharCode(10539)
    return (
        <List dense>

            <ListItem>Password must contain :</ListItem>

            {conditions.map((condition, index) => {
                return (
                    <ListItem key={index}>
                        <ListItemIcon className={conditionStates[index] ? "register-condition-icon-passed" : "register-condition-icon"}>
                            {tenCharacters ? check : cross}
                        </ListItemIcon>
                        <ListItemText className={conditionStates[index] ? "register-condition-text-passed" : "register-condition-text"}>
                            {condition}
                        </ListItemText>
                    </ListItem>
                )
            })}

        </List>
    )
}

export default PasswordConditions