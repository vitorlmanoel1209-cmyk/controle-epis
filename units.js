// Catálogo compartilhado das unidades Laticínios Porto Alegre.
(() => {
    const units = Object.freeze({
        '101': 'Ponte Nova', '102': 'Mutum', '103': 'Contagem', '104': 'Rio Pomba',
        '105': 'Muriae', '106': 'São Gotardo', '107': 'Antônio Carlos',
        '108': 'Dores de Rio Preto', '110': 'Valença', '111': 'Rio Novo',
        '112': 'CD Rio Novo', '113': 'São Gonçalo do Pará', '115': 'Campo Belo', '117': 'Miracema'
    });
    window.inspecaoUnidades = units;
    window.unidadeValida = id => Object.hasOwn(units, String(id || ''));
    window.rotuloUnidade = id => units[id] ? `${id} — ${units[id]}` : 'Sem unidade';
    window.opcoesUnidades = (selected = '') => '<option value="">Selecione a unidade...</option>' +
        Object.entries(units).map(([id, name]) => `<option value="${id}" ${id === selected ? 'selected' : ''}>${id} — ${name}</option>`).join('');
})();
