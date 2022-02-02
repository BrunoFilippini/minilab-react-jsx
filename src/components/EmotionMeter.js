import styles from './EmotionMeter.module.css'

export function EmotionMeter (props) {
    function happyOrSad (type) {
        if (type === "SAD"){
      
            return <i class="fas fa-frown"></i>
      
        } else if (type === "HAPPY") {
      
            return <i class="fas fa-smile-beam"></i>
      
        }
    }

    return (

        <div className={styles.emoji}>

            {happyOrSad(props.type)}

        </div>
                   
    )
  }