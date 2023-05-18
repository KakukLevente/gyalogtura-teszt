describe('Sikertelen beérések: versenyzők, beért versenyzők', () => {
    it('adat: 32, 11', () => {
        let act = getUnsuccessCount(32, 11);
        expect(act).toBe(21);
    });
    
    it('adat: 100, 46', () => {
        let act = getUnsuccessCount(100, 46);
        expect(act).toBe(54);
    });
    it('adat:: 360, 111', () => {
        let act = getUnsuccessCount(360, 111);
        expect(act).toBe(249);
    });
});



describe('Sikertelen beérések százaléka:competitors, getUnsuccessCount(verenyzők, beért versenyzők)', () => {
    it('adat: 20, (20, 20)', () => {
        let act = getUnsuccessPercent(10, getUnsuccessCount(20, 20));
        expect(act).toBe(0);
    });
  
    it('adat: 300, (300, 30)', () => {
        let act = getUnsuccessPercent(300, getUnsuccessCount(300, 30));
        expect(act).toBe(90);
    });
    
});