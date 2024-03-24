// LangSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers/classNames/classNames';

const LangSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lng = event.target.value;
    void i18n.changeLanguage(lng);
  };

  return (
    <div>
      <select
        className={classNames('LangSwitcher', {}, [])}
        onChange={changeLanguage}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="de">German</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
