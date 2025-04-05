import { FC } from "react";
import { EnglishJapaneseWordTable } from "./EnglishJapaneseWordTable";
import { EnglishTranslator } from "./EnglishTranslator";

/**
 * 入力された文字をローカルストレージに保存する
 * */
export const Word: FC = () => {
    return <div>
        <EnglishTranslator />
        <EnglishJapaneseWordTable />
    </div>
}
export default Word;
